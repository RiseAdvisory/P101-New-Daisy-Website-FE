import DOMPurify from 'dompurify';

const normalizeReadableText = (value: string): string => value.replace(/--/g, '-');

export function stripHtml(value: string | null | undefined): string {
  if (!value) {
    return '';
  }

  const normalized = normalizeReadableText(value);
  return normalized.replace(/<[^>]*>/g, '');
}

export function renderSafeHtml(value?: string | null): string {
  if (!value) {
    return '';
  }

  const normalized = normalizeReadableText(value);

  if (typeof window === 'undefined') {
    return normalized;
  }

  return DOMPurify.sanitize(normalized);
}
