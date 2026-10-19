// Kept as a literal so this module has no import cycle with src/lib/site.ts.
const SITE_LOCALE = 'en-GB';

const longDate = new Intl.DateTimeFormat(SITE_LOCALE, {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const machineDate = new Intl.DateTimeFormat('en-CA', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

/** "19 October 2026" — the only date format used on the site. */
export function formatDate(date: Date): string {
  return longDate.format(date);
}

/** "2026-10-19" for <time datetime>. */
export function machineDateString(date: Date): string {
  return machineDate.format(date);
}
