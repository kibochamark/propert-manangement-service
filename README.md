Rental Management Backend — Sprint Plan

Why we're building this

The owner of one apartment block (about 20 houses) can't reliably answer: who has paid, who hasn owe. That's the problem.Everything else followgets solved ("who has paid this month"); Sprint 5 closes the loop with move-out and vacancy. Water, PDF statements, reports, reminders and audit logging all moved past the MVP line.
- Jargon stripped. The motences: charges, payments,ored.

One call I made that's worth your review: water is outside the MVP. It's five sections of the original document and part of her monthly collection, so it's a defensible thing to disagree with — I flagged it in the plan as the sprint to pull forward if she needs it at launch.

For growth, the only forward-looking thing I built in is a "where did this payment come from" field on every payment — manual today, M-Pesa or bank feed
later. That means automatame table instead of
needing a second payment

⏺ User approved Claude's plan
Plan saved to: ~/.claude/plans/we-are-about-to-quizzical-deer.md · /plan to
edit
he owner of one apartment block (about 20 houses) can't reliably answer: who has paid, who hasn't, and what do they still owe. That's the problem. Everything else follows from it.

She will use the system by hand — she marks a house vacant, she records a payment, she uploads the M-Pesa screenshot. So the job is accurate record-keeping and a clean API, not clever automation.

Three rules she gave us that shape everything:

. Every tenant pays a deposit — an agreed amount, normally the same as the rent.
3. Changing the rent for a new tenant must never change an old tenant's records.

Stack: NestJS + Prisma + Postgres, same as hert-service and dantech-v2. Kinde for login. Cloudinary for uploaded payment proofs.

---

---

How the money works (the one thing to get right)

We keep three simple things:
deposit, or a one-off fee.
- A payment — money that came in.
- A link between them — which payment paid off which charge, and how much of it.

We never store a balance anywhere. We work it out: everything charged, minus everything paid. That way the owner can always see why someone owes money, not just that they do. If a tenant overpays, the extra sits as credit and gets used on the next charge.

On rule 3 (rent history): the rent amount is copied onto the tenancy when the tenant moves in, and copied again onto each month's rent charge. The rent on the house record is only a starting suggestion for the next tenant.
So when House 05 goes ry old record staysurrent rent instead of the rent stored on the record — we test against that specifically.

On the deposit: it's kept as its own kind of charge and payments toward it are never applied to rent. A deposit payment must never make rent arrears look smaller.

Nothing financial gets deleted. A wrong payment is reversed with a reason, and stays visible in the history.

---

Login

Kinde handles login. We only need a guard on our side that:

- reads the token from the Authorization header,
- fetches and caches Kinde's public keys from its .well-known/jwks.json,
- checks the signature, expiry, issuer and audience,
- pulls the user's id, email and name out of the token and puts them on the request.

We store a small local user record keyed by the Kinde user id, so we can record who entered each payment. No passwords, no sessions, no user management of our own.


Sprint 1 — Service running, houses in the system

┌─────┬──────────────────────────────────┬────────────────────────────────┐
│  #  │               Task               │             Story              │
├─────┼──────────────────────────────────┼────────────────────────────────┤
│     │ Project setup: NestJS, Prisma,   │ So we have something we can    │
│ 1.1 │ Postgres in Docker, health       │ run and deploy from day one.   │
│     │ endpoint                         │                                │
├─────┼─────────────────────────────────────────┤
│     │                                  │ As the owner, I want the       │
│ 1.2 │ Kinde token guard + local user   │ system to be private, so       │
│     │ record                           │ tenant and money details       │
│     │               t open to anyone.         │
     │ Property details — view and edit │ As the owner, I want my        │
│ 1.3 │  name, address, owner contact,   │ property's default settings in │
│     │ default rent, default water rate │  one place, so new houses      │
│     │                                  │ start with the right figures.  │
├─────┼──────────────────────────────────┼────────────────────────────────┤
│     │ Houses — add, edit, list, view   │ As the owner, I want a record  │
│ 1.4 │ one. Each has: number, type,     │ for each house, so I can see   │
│     │ rent, deposit amount, meter      │ its rent, meter and tenant in  │
│     │ number, status, notes            │ one place.                     │
├─────┼─────────────────────────────────────────┤
│     │ Change a house's status by hand: │ As the owner, I want to mark a │
│ 1.5 │  vacant, occupied, reserved,     │  house vacant myself, so the   │
│     │ notice given, maintenance,       │ system matches what's actually │
│     │ inactive      ening.                    │

End of sprint: the owner can log in and see all 20 houses with their status.

---

Sprint 2 — Tenants move in

#: 2.1
Task: Tenant records —one, second phone, IDnumber,
email, occupation, next of kin
Story: As the owner, I want each tenant's details saved, so I can reach
them
nd identify them.
────────────────────────────────────────
#: 2.2
Task: Move-in — one action that takes the tenant, house, agreed rent, deposit
amount, start date and opening meter reading, and marks the house occupied
Story: As the owner, I want to move a tenant in with one step, so I never end
up with half a record.
──────────────────────
#: 2.3
Task: Deposit recorded as owed at move-in, defaulting to the rent amount
but
changeable
Story: As the owner, I want the deposit tracked from day one, so I know who
still owes part of it.
────────────────────────────────────────
#: 2.4
Task: Tenant history per house — every past tenant with the rent they
actually
paid
Story: As the owner, I want to see House 05's past five tenants, each with
their own rent, so old records stay true.
──────────────────────
ask: Stop two tenants being active in the same house at once
Story: So the records can't quietly contradict themselves.

End of sprint: tenants can be moved in, and each house shows its current and past tenants.

---

Sprint 3 — Rent and payments (the heart of the system)

#: 3.1
Task: Raise the month's rent for every occupied house, using the rent stored on
that tenancy
rrears build up correctly without me doing it by hand.
────────────────────────────────────────
#: 3.2
Task: Record a payment — amount, date, method (M-Pesa, bank, cash, other),
reference number, what it's for, notes, and who entered it
Story: As the owner, I want to record a payment in seconds, so my records stay
current while I'm walking around the property.
────────────────────────────────────────
#: 3.3
Task: Apply the payment — oldest unpaid month first by default, or let the
owner pick the months herself
Story: As the owner, I want a 30,000 payment to clear July's arrears then
August's rent, so I doself.
: 3.4
Task: Upload proof of payment — photo or PDF attached to the payment
Story: As the owner, I want the M-Pesa message saved with the payment, so I can
 prove it months later.
────────────────────────────────────────
#: 3.5
Task: Warn when an M-Pesa reference has already been used, but let her continue
with a reason
Story: So the same payment doesn't get entered twice by accident.
────────────────────────────────────────
#: 3.6
Task: Reverse a paymenlete ithat
happened.
────────────────────────────────────────
#: 3.7
Task: Partial payments work naturally (5,000 three times clears a 15,000 rent)
Story: As the owner, I want tenants to pay in bits, because that's how they
actually pay.

End of sprint: every payment that comes in can be recorded, backed by proof, and applied to the right month.

---

Sprint 4 — Knowing who has paid

┌─────┬─────────────────────────────────┬─────────────────────────────────┐
│  #  │              Task               │              Story              │
├─────┼─────────────────────────────────┼─────────────────────────────────┤
│     │ A tenant's balance, split into  │ As the owner, I want one number │
│ 4.1 │ rent, deposit and total         │  per tenant, plus the breakdown │
│     │               d it.                     │
├─────┼─────────────────────────────────┼─────────────────────────────────┤
│     │ Monthly rent status list —      │ As the owner, I want one screen │
│ 4.2 │ every house fotells me who has paid     │
│     │  rent, paid, balance, and paid  │ this month, because this is the │
│     │ / partly paid / unpaid          │  question I ask every day.      │
├─────┼─────────────────────────────────┼─────────────────────────────────┤
│     │ Arrears list — who owes, how    │ As the owner, I want to see     │
│ 4.3 │ much, how many months behind,   │ who's falling behind, so I can  │
│     │ oldest unpaid month             │ follow up early.                │
├─────┼─────────────────────────────────────────┤
│     │ Tenant account and transaction  │ As the owner, I want to show a  │
│ 4.4 │ history — every charge and      │ tenant exactly how their        │
│     │ payment in date order with a    │ balance was reached, so there's │
│     │ running balancgument.                   │
─────┼─────────────────────────────────┼─────────────────────────────────┤
│     │ Dashboard figures — houses by   │                                 │
│ 4.5 │ status, rent expected,          │ As the owner, I want the state  │
│     │ collected and outstanding this  │ of my property at a glance.     │
│     │ month, deposits held            │                                 │
├─────┼─────────────────────────────────┼─────────────────────────────────┤
│     │ Each dashboard figure can be    │ As the owner, I want to tap "5  │
│ 4.6 │ opened to see the actual houses │ unpaid" and see which five.     │
│     │  or tenants behind it           │                                 │
└─────┴─────────────────────────────────────────┘

End of sprint: the original problem is solved. The owner can answer "who
has paid" instantly.

---

Sprint 5 — Moving out, and the MVP is done

#: 5.1
Task: Record notice to leave — notice date, expected date, reason; house
shows
as notice given
Story: As the owner, I are about to free up.
────────────────────────────────────────
#: 5.2
Task: Move-out settlement — what's still owed, deposit held, itemised
deductions, amount refunded, date. House becomes vacant, tenant becomes a
former tenant
Story: As the owner, Iut, so I don't refund a
deposit
 to someone who still owes money.
────────────────────────────────────────
#: 5.3
Task: Vacant houses lis tenant, maintenancestate,
date available, asking
Story: As the owner, Ient out right now.
──────────────────────
#: 5.4
Task: Payment list withouse, tenant, phone, ID,
reference, method, date range
Story: As the owner, Iayment when a tenant
queries
it.
──────────────────────
#: 5.5
Task: Export payments and arrears to CSV
Story: As the owner, Iadsheet when I need them.

MVP complete. Houses,  rent, payments with proof,
balances, arrears, mov

---

After the MVP

Sprint 6 — Water. Meteous, current, units, rate,
bill), reading history charge, water payments
kept separate from renBuilt so electricity,
garbage or service chajust another utility.

▎ Water is the only MV it's a real part of hermonthly collection, so if she needs it at launch, pull this sprint in ahead of Sprint 5.

Sprint 7 — Statements ant statement as PDF, rentreport, water report, occupancy report, arrears report, monthly collection
report, fuller exports
 Sprint 8 — Reminders, and overdue reminders shown in the app, a staff ros but not change rent, and a log of who changed w

Later — automated paym that create paymentsautomatically instead of the owner typing them.

---

Staying simple while l

We don't build for theoices keep the door open:

- Every payment records where it came from — "entered by hand" today,
  "M-Pesa feed" or "bapayments then write to thesame table with no rework.
- Charge types are a l other), so addingelectricity or garbage later is a new entry, not a new system.
- Every house belongs st migration, so a second
  block can be added w
- Payment methods are n be added from settings.

---

How we check it works

Set up seed data of 20 houses with a mix of paid, part-paid and unpaid
tenants, then confirm:

1. Rent 15,000, three e zero. Pay only 10,000 →
   balance 5,000.
2. A 30,000 payment whd August is unpaid → July
   cleared, August clet.
3. Rent history: move use's rent, move a newtenant in, then open the old tenant's history — every figure must be unchanged.
4. Deposit: record a deposit payment while the tenant has rent arrears —the rent balance muReverse a payment →nd the reversed paymentstill visible in thThe monthly rent std totals match figuresworked out by hand