# Testing the move-out flow (Sprint 5)

A hands-on walkthrough of notice → vacate → deposit settlement, using one
running example (Mary, House H06) end to end — same style as
[`TESTING.md`](./TESTING.md).

> **Status: planned, not yet implemented.** The endpoints below describe
> the agreed design for Sprint 5. Nothing in `src/` implements them yet.
> Treat this as the acceptance spec to build against and to replay once
> `TenancyService.recordNotice` / `.vacate` and the new `SettlementModule`
> exist. All routes assume `/api/v1/...` and `Authorization: Bearer
> <kinde-token>`, exactly like the rest of the API.

## The business flow, in short

Three steps, two of them changing state and one of them only computing:

1. **Notice** (`PATCH tenancies/tenancy/:id/notice`) — optional. Records
   that the tenant said they're leaving, and when. The house starts
   showing `NOTICE_GIVEN`. Nothing financial happens.
2. **Vacate** (`PATCH tenancies/tenancy/:id/vacate`) — the tenancy ends,
   the house frees up, the tenant becomes `FORMER`. Works with or without
   step 1 — an emergency move-out is still a valid vacate.
3. **Settle** (`GET` then `POST .../settlements/tenancy/:id`) — the owner
   reviews a computed preview (deposit actually held, real arrears, notice
   compliance) and records the real refund decision.

The one rule that drives every number below: **the deposit ceiling is
what was actually paid in, never the agreed figure.** A tenant who only
ever paid half their deposit can never be refunded the whole thing.

### `Tenancy.status` has no generic setter

`House` has a general-purpose `PATCH houses/house/:id/status` that takes
any `HouseStatus`. `Tenancy` deliberately does **not** get an equivalent.
Every value of `TenancyStatus` is the *result* of a flow that does more
than flip a column:

| Status | Only reachable via | What else happens on the way in |
|---|---|---|
| `ACTIVE` | `POST tenancies/move-in` | creates the deposit charge, house → `OCCUPIED` |
| `NOTICE_GIVEN` | `PATCH tenancies/tenancy/:id/notice` | house → `NOTICE_GIVEN` |
| `VACATED` | `PATCH tenancies/tenancy/:id/vacate` | tenant → `FORMER`, house → `VACANT`/override, settlement preview built |

There is no status left over that a generic editor could safely touch —
so if a general tenancy-edit endpoint is ever added (for `notes`,
`monthlyRent`, `expectedEndDate`, and the like), its DTO must **omit
`status` entirely**, not just restrict it to an enum subset. The same
applies to any bulk/admin tooling — `tx.tenancy.update({ data: { status }
})` must only ever be called from inside `moveIn`, `recordNotice`, or
`vacate`, never from a general-purpose repository method.

---

## Setup — one house, one tenant, one tenancy with real arrears

You need a `Property` from Sprint 1 already in place (`property_1` below).

```http
POST /api/v1/houses
{
  "propertyId": "property_1",
  "unitNumber": "H06",
  "houseType": "1BR",
  "defaultMonthlyRent": 15000,
  "defaultDepositAmount": 15000
}
```
→ `{ "id": "house_h06", "status": "VACANT", ... }`

```http
POST /api/v1/tenants
{ "fullName": "Mary Wanjiru", "phone": "0722000111" }
```
→ `{ "id": "tenant_1", ... }`

```http
POST /api/v1/tenancies/move-in
{
  "houseId": "house_h06",
  "tenantId": "tenant_1",
  "monthlyRent": 15000,
  "depositRequired": 15000,
  "startDate": "2026-07-01"
}
```
→ `{ "id": "tenancy_1", "status": "ACTIVE", "noticePeriodDays": 30, ... }`
Also creates a `RENTDEPOSIT` charge of 15,000 and flips H06 to `OCCUPIED`.

Generate July and August rent (or let the nightly cron do it — see
`TESTING.md` Scenario 1):

```http
POST /api/v1/rent/generate
{ "month": "2026-07-01" }
```
```http
POST /api/v1/rent/generate
{ "month": "2026-08-01" }
```
→ two `RENT` charges of 15,000 each, for `2026-07-01` and `2026-08-01`.

August's water bill arrives and is recorded by hand:

```http
POST /api/v1/charges
{
  "tenancyId": "tenancy_1",
  "type": "WATER",
  "amount": 1400,
  "periodMonth": "2026-08-01",
  "description": "August water bill"
}
```

### Payments — one partial deposit, one rent payment that deliberately skips it

Mary pays 7,500 toward her deposit on move-in day. No explicit
allocation — the auto-allocation cascade sends it straight to the only
outstanding tier-0 charge:

```http
POST /api/v1/payments
{
  "tenancyId": "tenancy_1",
  "amount": 7500,
  "paidAt": "2026-07-01",
  "method": "MPESA",
  "reference": "QK1A001"
}
```
→ `RENTDEPOSIT` now 7,500 / 15,000 paid, 7,500 still outstanding.

In August she pays July's rent in full. This time the owner **names the
charge explicitly** — otherwise the cascade would apply this money to the
still-outstanding deposit first (tier 0 always wins), and July's rent
would stay unpaid instead:

```http
GET /api/v1/charges?tenancyId=tenancy_1&type=RENT
```
→ note the `id` of the `2026-07-01` RENT charge, call it `charge_rent_jul`.

```http
POST /api/v1/payments
{
  "tenancyId": "tenancy_1",
  "amount": 15000,
  "paidAt": "2026-08-02",
  "method": "MPESA",
  "reference": "QK1A002",
  "allocations": [ { "chargeId": "charge_rent_jul", "amount": 15000 } ]
}
```
→ July `RENT` fully paid. Deposit remains 7,500 outstanding, on purpose —
this is a tenant the owner let slide on the deposit, which is exactly the
case the settlement math has to get right.

Confirm the picture before move-out:

```http
GET /api/v1/tenancies/tenancy/tenancy_1/balance
```
→
```json
{
  "tenancyId": "tenancy_1",
  "byType": { "RENTDEPOSIT": 7500, "RENT": 15000, "WATER": 1400 },
  "total": 23900,
  "isCleared": false
}
```
(July rent doesn't appear — it's fully paid, so it's not outstanding.)

Every scenario below uses `tenancy_1`.

---

## Scenario 1 — Recording notice (5.1)

Mary tells the owner on 18 September that she's leaving on 30 September.
Her tenancy's frozen `noticePeriodDays` is 30 (the property default,
copied in at move-in) — so 12 days' notice is short.

```http
PATCH /api/v1/tenancies/tenancy/tenancy_1/notice
{
  "noticeDate": "2026-09-18",
  "expectedEndDate": "2026-09-30",
  "reason": "Relocating for work"
}
```
→
```json
{
  "id": "tenancy_1",
  "status": "NOTICE_GIVEN",
  "noticeDate": "2026-09-18T00:00:00.000Z",
  "expectedEndDate": "2026-09-30T00:00:00.000Z",
  "moveOutReason": "Relocating for work",
  "house": { "id": "house_h06", "status": "NOTICE_GIVEN" }
}
```

**Rent still accrues while on notice** — this is the regression the plan
calls out explicitly. Generating September's rent must still work:

```http
POST /api/v1/rent/generate
{ "month": "2026-09-01" }
```
→ `{ "generated": 1, "skipped": 0 }` — a `NOTICE_GIVEN` tenancy is still a
live tenancy. (If this ever returns `generated: 0`, the `OCCUPYING_STATUSES`
fix described in the plan has regressed.) For this walkthrough, void that
September charge afterwards so the numbers below stay simple — Mary is
in fact leaving on 30 September, not living through September:

```http
PATCH /api/v1/charges/charge/<september-rent-charge-id>/void
{ "reason": "Tenant vacated before this period began" }
```

**Correcting a notice date** is allowed — Mary moves her date out by a
week, so the owner re-records it:

```http
PATCH /api/v1/tenancies/tenancy/tenancy_1/notice
{ "noticeDate": "2026-09-18", "expectedEndDate": "2026-10-07" }
```
→ `200`, tenancy stays `NOTICE_GIVEN` with the updated date. (Not carried
into the rest of this walkthrough — Mary still leaves on the 30th below.)

---

## Scenario 2 — Vacating (5.2, the state half)

30 September arrives and Mary actually leaves.

```http
PATCH /api/v1/tenancies/tenancy/tenancy_1/vacate
{
  "actualEndDate": "2026-09-30",
  "moveOutReason": "Relocating for work"
}
```
→
```json
{
  "tenancy": {
    "id": "tenancy_1",
    "status": "VACATED",
    "actualEndDate": "2026-09-30T00:00:00.000Z",
    "tenant": { "id": "tenant_1", "status": "FORMER" },
    "house": { "id": "house_h06", "status": "VACANT" }
  },
  "settlementPreview": { "...": "see Scenario 3 — identical payload" }
}
```

House H06 is immediately re-lettable. If it needed repairs first:

```http
PATCH /api/v1/tenancies/tenancy/tenancy_1/vacate
{
  "actualEndDate": "2026-09-30",
  "houseStatusAfter": "MAINTENANCE",
  "houseStatusReason": "Repaint before next tenant"
}
```
→ `house.status: "MAINTENANCE"` instead of `VACANT` (shown here as the
alternative call — not chained onto the request above, since a tenancy
can only be vacated once).

---

## Scenario 3 — The settlement preview (5.2, "so I don't refund a deposit to someone who still owes money")

```http
GET /api/v1/settlements/tenancy/tenancy_1/preview
```
→
```json
{
  "tenancyId": "tenancy_1",
  "tenancyStatus": "VACATED",
  "canSettle": true,
  "alreadySettled": false,
  "deposit": {
    "agreed": 15000,
    "charged": 15000,
    "held": 7500,
    "neverPaid": 7500,
    "lines": [
      { "chargeId": "charge_deposit", "type": "RENTDEPOSIT",
        "charged": 15000, "paid": 7500, "outstanding": 7500 }
    ]
  },
  "arrears": {
    "total": 16400,
    "charges": [
      { "chargeId": "charge_rent_aug", "type": "RENT", "periodMonth": "2026-08-01T00:00:00.000Z",
        "reason": "Rent arrears for 2026-08", "amount": 15000 },
      { "chargeId": "charge_water_aug", "type": "WATER", "periodMonth": "2026-08-01T00:00:00.000Z",
        "reason": "Water arrears for 2026-08", "amount": 1400 }
    ]
  },
  "totalOutstandingIncludingDeposit": 23900,
  "unallocatedCredit": 0,
  "suggestedDeductions": [
    { "chargeId": "charge_rent_aug", "reason": "Rent arrears for 2026-08", "amount": 15000 },
    { "chargeId": "charge_water_aug", "reason": "Water arrears for 2026-08", "amount": 1400 }
  ],
  "noticeCompliance": {
    "status": "SHORT_NOTICE",
    "requiredNoticeDays": 30,
    "noticeDate": "2026-09-18T00:00:00.000Z",
    "daysGiven": 12,
    "shortfallDays": 18,
    "endDateUsed": "2026-09-30T00:00:00.000Z",
    "basis": "ACTUAL_END"
  }
}
```

Read it the way the owner would:

- **"How much can I actually refund?"** → `deposit.held` = 7,500. Not
  15,000 — Mary never finished paying her deposit, and the system will
  not let that unpaid 7,500 be refunded, nor let it be double-counted as
  an arrear (notice `deposit.neverPaid` appears only as information, not
  inside `arrears` or `suggestedDeductions`).
- **"What does she still owe?"** → `arrears.total` = 16,400 — more than
  her entire deposit. `suggestedDeductions` sums to 16,400; her deposit
  only covers 7,500 of that.
- **"Did she give proper notice?"** → `SHORT_NOTICE`, 18 days short. No
  amount is attached to this — that withholding decision is the owner's
  to make and type herself, below.

---

## Scenario 4 — Recording the settlement (5.2, the write)

The owner decides: keep the whole 7,500 against the arrears (it doesn't
cover all of it, and that's fine — the guardrail only checks the refund
isn't *more* than what's held), refund nothing, and note in her own words
that Mary still owes the rest outside this system:

```http
POST /api/v1/settlements/tenancy/tenancy_1
{
  "refundAmount": 0,
  "refundDate": "2026-10-01",
  "method": "MPESA",
  "notes": "Short notice (12 of 30 days) and unpaid arrears exceed the deposit held — full deposit retained, 8,900 still owed separately",
  "deductions": [
    { "reason": "August rent arrears (partial — deposit could not cover the full 15,000 owed)", "amount": 6100 },
    { "reason": "August water arrears", "amount": 1400 }
  ]
}
```
→ `201`
```json
{
  "id": "refund_1",
  "tenancyId": "tenancy_1",
  "depositHeld": 7500,
  "refundAmount": 0,
  "refundDate": "2026-10-01T00:00:00.000Z",
  "method": "MPESA",
  "notes": "Short notice (12 of 30 days) and unpaid arrears exceed the deposit held — full deposit retained, 8,900 still owed separately",
  "deductions": [
    { "id": "ded_1", "reason": "August rent arrears (partial — deposit could not cover the full 15,000 owed)", "amount": 6100 },
    { "id": "ded_2", "reason": "August water arrears", "amount": 1400 }
  ]
}
```

Deductions here (6,100 + 1,400 = 7,500) are written as an **internal
payment** behind the scenes, allocated against the exact arrears charges
named — so the balance actually reflects what was settled, instead of
double-counting money that's already been accounted for:

```http
GET /api/v1/tenancies/tenancy/tenancy_1/balance
```
→
```json
{
  "tenancyId": "tenancy_1",
  "byType": { "RENTDEPOSIT": 7500, "RENT": 8900 },
  "total": 16400,
  "isCleared": false
}
```
Water is fully cleared (1,400 of 1,400). August rent dropped from 15,000
to 8,900 (15,000 − 6,100 applied from the deposit) — the honest remainder
the deposit couldn't reach. The unpaid 7,500 deposit itself is untouched
and still shown — nothing financial is ever deleted, voided, or quietly
written off; it stays visible as a historical fact about this tenancy.

---

## Edge cases worth trying deliberately

| What you try | Expected result |
|---|---|
| Vacate a tenancy that was never given notice | `200` — notice is optional; `noticeCompliance.status` comes back `NO_NOTICE`, `daysGiven: null` |
| Vacate the same tenancy twice | `409 Conflict` |
| Record notice on a tenancy that's already `VACATED` | `409 Conflict` |
| `POST .../settlements/tenancy/:id` while tenancy is still `ACTIVE` or `NOTICE_GIVEN` | `409 Conflict` |
| Settle with `refundAmount` greater than `deposit.held` | `400 Bad Request`, naming both figures |
| Settle with `refundAmount: 0` (full forfeiture) | `200/201` — legal, not rejected as "non-positive" |
| Settle the same tenancy a second time | `409 Conflict` (not a bare 500) |
| `GET .../settlements/tenancy/:id/preview` before vacating at all | `200` — works at any status, `canSettle: false` while still `ACTIVE`/`NOTICE_GIVEN` |
| Move a new tenant into H06 after the vacate above | `200` — `VACATED` doesn't block `move-in`'s one-active-tenancy guard |
| Try to set `status` via any general tenancy-edit endpoint | not an available operation — `status` must never appear in a generic update DTO (see "`Tenancy.status` has no generic setter" above) |

---

## Deliberately not covered here

- **Unpaid deposit charges that were later voided and re-issued** (e.g.
  owner fixes a typo in the deposit amount after the tenant already paid
  it) — whether that paid amount still counts toward `deposit.held` is
  still an open product decision, not yet resolved.
- **Pro-rating a final month's rent.** If a tenant leaves mid-month, the
  full month's `RENT` charge still stands as arrears; nothing here
  automatically prorates it. The owner can void or adjust that charge by
  hand before settling if she wants to charge less.
- **Un-vacating.** Once a tenancy is `VACATED`, there is no endpoint to
  reverse it — exactly like `voidPayment`/`voidCharge`, this is meant to
  be a deliberate, final action, not a toggle.
