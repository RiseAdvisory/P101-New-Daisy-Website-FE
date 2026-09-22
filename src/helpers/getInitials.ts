// Leading punctuation that should not become an initial, e.g. "(Nora)" -> "N".
// Deliberately a fixed set rather than a unicode property escape, since the
// TypeScript target here is es2017.
const LEADING_PUNCTUATION = /^[\s"'“”‘’([{.,\-–—_]+/;

/**
 * Derive display initials from a person's name.
 *
 * Used for avatar placeholders where no portrait exists. Takes the first
 * character of each of the first `max` words, skipping leading punctuation.
 * Returns an empty string for empty or unusable input, so callers can decide
 * whether to render anything at all.
 *
 * Works for non-ASCII names: `Array.from` avoids splitting surrogate pairs,
 * and `toUpperCase` is a no-op for scripts without case (Arabic, CJK).
 */
export const getInitials = (name: string | null | undefined, max = 2): string =>
  String(name ?? '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, max)
    .map((word) => Array.from(word.replace(LEADING_PUNCTUATION, ''))[0] ?? '')
    .join('')
    .toUpperCase();
