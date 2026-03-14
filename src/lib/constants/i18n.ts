export type Locale = 'en' | 'ar';

export type I18nContent<T> = Record<Locale, T>;

export function t<T>(content: I18nContent<T>, lang: string): T {
  return content[(lang as Locale)] ?? content.en;
}
