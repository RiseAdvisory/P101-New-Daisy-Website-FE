const EN_MONTHS: Record<string, number> = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
};

function safeParseDate(value?: string): Date | null {
  if (!value) return null;

  // ISO-like timestamps are safe to parse across environments.
  const iso = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) {
    const year = Number.parseInt(iso[1], 10);
    const month = Number.parseInt(iso[2], 10) - 1;
    const day = Number.parseInt(iso[3], 10);
    if (Number.isFinite(year) && Number.isFinite(month) && Number.isFinite(day)) {
      // Use midday UTC so the calendar day doesn't shift across timezones.
      return new Date(Date.UTC(year, month, day, 12, 0, 0));
    }
  }

  // Our blog data stores dates as "28 April 2025" (D MMMM YYYY).
  // Avoid relying on Date.parse for this format; it is not consistent across browsers.
  const dmy = value.match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);
  if (dmy) {
    const day = Number.parseInt(dmy[1], 10);
    const monthName = dmy[2].toLowerCase();
    const year = Number.parseInt(dmy[3], 10);
    const month = EN_MONTHS[monthName];
    if (
      Number.isFinite(day) &&
      Number.isFinite(year) &&
      typeof month === 'number' &&
      month >= 0 &&
      month <= 11
    ) {
      return new Date(Date.UTC(year, month, day, 12, 0, 0));
    }
  }

  // Last resort: let the runtime try to parse (covers "April 28, 2025", etc).
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d;
}

export function formatBlogDate(
  rawDate: string | undefined,
  locale: string,
  fallbackRaw: string = ''
): string {
  const d = safeParseDate(rawDate);
  if (!d) return fallbackRaw || rawDate || '';

  // EN should display as "28 April 2025" (day-month-year).
  // AR should display with Arabic month name + Arabic-Indic digits in RTL.
  const fmtLocale = locale === 'ar' ? 'ar-KW' : 'en-GB';
  return new Intl.DateTimeFormat(fmtLocale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d);
}

const ARABIC_DIGITS = '٠١٢٣٤٥٦٧٨٩';

function parseMinutes(raw?: string): number | null {
  if (!raw) return null;
  const m = raw.match(/[\d٠-٩]+/);
  if (!m) return null;
  const normalized = m[0].replace(/[٠-٩]/g, (ch) => String(ARABIC_DIGITS.indexOf(ch)));
  const n = Number.parseInt(normalized, 10);
  return Number.isFinite(n) ? n : null;
}

export function formatReadTime(rawTime: string | undefined, locale: string): string {
  if (!rawTime) return '';

  const minutes = parseMinutes(rawTime);
  if (!minutes) return rawTime;

  // Keep the English/UI copy as-is for non-Arabic locales. Only localize Arabic.
  if (locale !== 'ar') return rawTime;

  const n = new Intl.NumberFormat('ar-KW').format(minutes);

  if (minutes === 1) return 'دقيقة واحدة';
  if (minutes === 2) return 'دقيقتان';
  if (minutes >= 3 && minutes <= 10) return `${n} دقائق`;
  return `${n} دقيقة`;
}

// Used by pillar pages where English source strings look like "18 min read".
export function formatReadingTime(rawTime: string | undefined, locale: string): string {
  if (!rawTime) return '';
  if (locale !== 'ar') return rawTime;

  const minutes = parseMinutes(rawTime);
  if (!minutes) return rawTime;

  const base = formatReadTime(`${minutes} min.`, locale);
  return base ? `${base} قراءة` : rawTime;
}
