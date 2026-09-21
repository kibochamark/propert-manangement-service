# Testing the Rent, Charge & Payment modules

A hands-on walkthrough of Sprint 3 — the money engine. Each scenario is a
real sequence of requests you can run against a local server, using one
running example (Mary, House H02) end to end.

All routes sit under `/api/v1/...` (see `enableVersioning` in `main.ts`)
and require `Authorization: Bearer <kinde-token>` — every controller here
is behind `KindeAuthGuard`.

## The business flow, in short

Three tables carry all the money logic:

- **Charge** — something owed (rent, a water bill, the deposit, a trash
  fee). Has a `type`, an `amount`, and usually a `periodMonth`.
- **Payment** — money that came in (M-Pesa, cash, bank).
- **PaymentAllocation** — the link: how much of a payment went to which
  charge.

**Nothing stores a running balance.** A tenancy's balance is always
*derived*: every charge, minus every allocation from a payment that isn't
voided. That's what `BalanceService` computes, and it's the single source
of truth both the auto-allocator and the `GET .../balance` endpoint use.

**Rent and deposits are pre-paid**, generated ahead of the month they
cover (`RentModule`, on a schedule). **Everything else is post-paid** —
water, trash, security, service fees — because the amount isn't known
until the bill arrives, so the owner records those by hand the moment she
knows the figure (`ChargeModule`).

**When a payment comes in with no explicit instructions**, it's applied
in this order, oldest-first within each tier, until the money runs out:

```
Tier 0: RENTDEPOSIT, WATERDEPOSIT, TRASHDEPOSIT, SECURITYDEPOSIT   (deposits always first)
Tier 1: RENT
Tier 2: WATER
Tier 3: TRASH, SECURITY, SERVICEFEE, OTHER
```

The owner can always override this by naming the exact charges a payment
should settle instead.

---

## Setup — one house, one tenant, one active tenancy

You need a `Property` and a `House` from Sprints 1–2 already in place.
From there:

```http
POST /api/v1/tenants
{ "fullName": "Mary Wanjiru", "phone": "0722000111" }
```
→ `{ "id": "tenant_1", ... }`

```http
POST /api/v1/tenancies/move-in
{
  "houseId": "house_h02",
  "tenantId": "tenant_1",
  "monthlyRent": 15000,
  "startDate": "2026-07-01"
}
```
→ creates the tenancy, a 15,000 `RENTDEPOSIT` charge, and flips H02 to
`OCCUPIED`. Response: `{ "id": "tenancy_1", ... }`

Every scenario below uses `tenancy_1`.

---

## Scenario 1 — Rent generation (3.1)

**Manual trigger**, so you don't have to wait for the schedule:

```http
POST /api/v1/rent/generate
{ "month": "2026-07-01" }
```
→ `{ "generated": 1, "skipped": 0 }`

Confirm it landed:

```http
GET /api/v1/charges?tenancyId=tenancy_1
```
→
```json
[
  { "type": "RENTDEPOSIT", "amount": "15000", ... },
  { "type": "RENT", "periodMonth": "2026-07-01T00:00:00.000Z", "amount": "15000", ... }
]
```

**Idempotency** — run the exact same request again:

```http
POST /api/v1/rent/generate
{ "month": "2026-07-01" }
```
→ `{ "generated": 0, "skipped": 1 }` — no duplicate charge. The unique
constraint on `(tenancyId, type, periodMonth)` plus `RentService` catching
the resulting `ConflictException` is what makes this safe to call
repeatedly.

**Watching the cron run for real:** with `.env`'s
`RENT_CRON_SCHEDULE="*/5 * * * * *"`, start the app (`pnpm start:dev`) and
watch the logs — every 5 seconds:
`Rent generation for 2026-07: 0 generated, 1 already existed`. Once
today's date is within `RENT_GENERATION_LEAD_DAYS` (default 5) of
month-end, you'll also see a second line generating *next* month's rent —
this is the "pre-paid" behaviour: the charge exists before the month
starts, not on day one of it.

> In production, set `RENT_CRON_SCHEDULE="0 0 * * *"` (midnight) instead.

---

## Scenario 2 — Post-paid charges: "any other charge that comes with the property"

The water bill and a fixed trash fee arrive at the end of July. Rent and
deposit were pre-paid and auto-generated; these are recorded by hand the
moment the figure is known:

```http
POST /api/v1/charges
{
  "tenancyId": "tenancy_1",
  "type": "WATER",
  "amount": 1500,
  "periodMonth": "2026-07-01",
  "description": "July water bill"
}
```

```http
POST /api/v1/charges
{ "tenancyId": "tenancy_1", "type": "TRASH", "amount": 400, "periodMonth": "2026-07-01" }
```

Check the full picture — this is the number that answers "has Mary
cleared out," across every charge type at once:

```http
GET /api/v1/tenancies/tenancy/tenancy_1/balance
```
→
```json
{
  "tenancyId": "tenancy_1",
  "byType": { "RENTDEPOSIT": 15000, "RENT": 15000, "WATER": 1500, "TRASH": 400 },
  "total": 31900,
  "isCleared": false
}
```

---

## Scenario 3 — Partial payment + auto-allocation (3.2, 3.3, 3.7)

Mary pays 20,000 by M-Pesa. No `allocations` given — let the cascade
decide:

```http
POST /api/v1/payments
{
  "tenancyId": "tenancy_1",
  "amount": 20000,
  "paidAt": "2026-07-05",
  "method": "MPESA",
  "reference": "QK7X9"
}
```

Following the priority order: 15,000 clears the deposit in full, the
remaining 5,000 partially clears rent (5,000 of 15,000 — 3.7 in action,
nothing special was built for "partial," it's just what the model does).

```http
GET /api/v1/tenancies/tenancy/tenancy_1/balance
```
→
```json
{ "byType": { "RENT": 10000, "WATER": 1500, "TRASH": 400 }, "total": 11900, "isCleared": false }
```
Notice `RENTDEPOSIT` has disappeared from `byType` — fully paid, nothing
left to report.

**Manual override** — the owner wants a payment to specifically clear the
trash fee, bypassing the cascade entirely:

```http
POST /api/v1/payments
{
  "tenancyId": "tenancy_1",
  "amount": 400,
  "paidAt": "2026-07-06",
  "method": "CASH",
  "allocations": [{ "chargeId": "<trash-charge-id>", "amount": 400 }]
}
```

Worth deliberately breaking this to see the guardrails:
- Allocate `500` against that same 400 charge → `400 Bad Request`,
  "exceeds the outstanding balance."
- Give allocations that sum to more than the payment's own `amount` →
  `400 Bad Request`, "Total allocations exceed the payment amount."
- Point an allocation at a `chargeId` from a *different* tenancy →
  `400 Bad Request`, "is not an outstanding charge on this tenancy."

---

## Scenario 4 — Duplicate M-Pesa reference (3.5)

Re-submit the same reference by accident:

```http
POST /api/v1/payments
{ "tenancyId": "tenancy_1", "amount": 20000, "paidAt": "2026-07-05", "method": "MPESA", "reference": "QK7X9" }
```
→ `409 Conflict`
```json
{
  "message": "Reference \"QK7X9\" is already used on another payment",
  "conflictingPaymentId": "...",
  "conflictingTenancyId": "tenancy_1",
  "conflictingAmount": 20000,
  "conflictingDate": "2026-07-05T00:00:00.000Z"
}
```

It's a genuine second transaction that happens to reuse a similar-looking
code — confirm it:

```http
POST /api/v1/payments
{
  "tenancyId": "tenancy_1",
  "amount": 5000,
  "paidAt": "2026-07-07",
  "method": "MPESA",
  "reference": "QK7X9",
  "confirmDuplicate": true,
  "notes": "Second genuine M-Pesa transaction, confirmed with tenant by phone"
}
```
→ `201`, payment recorded.

Try `confirmDuplicate: true` **without** `notes` → `400 Bad Request`,
"A reason (in notes) is required when confirming a duplicate reference."

---

## Scenario 5 — Reversing a payment (3.6)

The cash payment from Scenario 3 turns out to be against the wrong
tenant:

```http
PATCH /api/v1/payments/payment/<payment-id>/void
{ "reason": "Recorded against wrong tenant, correct one is H04" }
```

Check the balance again — the trash charge is back to 400 outstanding,
exactly as if that payment never happened:

```http
GET /api/v1/tenancies/tenancy/tenancy_1/balance
```

But the payment itself is still there, not deleted:

```http
GET /api/v1/payments/payment/<payment-id>
```
→ includes `"voidedAt": "...", "voidReason": "Recorded against wrong tenant, correct one is H04"`

Try voiding it a second time → `409 Conflict`, "Payment is already
voided" — reversing is a one-way action, not a toggle.

---

## Edge cases worth trying deliberately

| What you try | Expected result |
|---|---|
| Record a payment against a `tenancyId` that doesn't exist | `404 Not Found` |
| Create a charge with a `type`/`periodMonth` combination that already exists for that tenancy | `409 Conflict` |
| Void a payment, then check `GET .../balance` | The voided payment's allocations no longer count — balance reverts |
| Move in a second tenant to a house that already has an active tenancy | `409 Conflict` (this is 2.5, from Sprint 2 — still holds) |
| Generate rent for a month with no active tenancies | `{ "generated": 0, "skipped": 0 }` — no error, nothing to do |

---

## Deliberately not covered here

**3.4 (proof-of-payment upload)** was descoped for this sprint — nothing
above exercises it. The `Payment`/`Attachment` model already has a place
to hang a file once that's built.
