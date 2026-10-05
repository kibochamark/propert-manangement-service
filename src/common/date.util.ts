const MS_PER_DAY = 86_400_000;

// Money and days both have to be exact. Every notice/move-out date is
// normalised to UTC midnight before it is stored OR compared, so the day
// difference is always a whole number and never depends on what timezone
// the server happens to be running in, nor on whether the client sent a
// bare date or an ISO string with a time/offset attached.
export function toUtcDateOnly(value: Date): Date {
  return new Date(Date.UTC(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate()));
}

// Whole calendar days between two already-meaningful dates. Both inputs
// are re-normalised to UTC midnight first, so a date carrying a stray
// time component (e.g. a pre-existing row written before this convention
// existed) still compares cleanly.
export function wholeDaysBetween(from: Date, to: Date): number {
  return Math.round((toUtcDateOnly(to).getTime() - toUtcDateOnly(from).getTime()) / MS_PER_DAY);
}
