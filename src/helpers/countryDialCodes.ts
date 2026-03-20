export const countryToDialCode: Record<string, string> = {
  // GCC (primary market)
  AE: '+971', SA: '+966', KW: '+965', BH: '+973',
  OM: '+968', QA: '+974',
  // MENA
  EG: '+20', JO: '+962', LB: '+961', IQ: '+964',
  MA: '+212', TN: '+216', DZ: '+213',
  // Key expat source countries
  IN: '+91', PK: '+92', PH: '+63', BD: '+880',
  NP: '+977', LK: '+94',
  // Major Western markets
  US: '+1', GB: '+44', CA: '+1', AU: '+61',
  DE: '+49', FR: '+33',
};

export function getDialCode(isoCountry: string | null): string {
  if (!isoCountry) return '+971';
  return countryToDialCode[isoCountry.toUpperCase()] ?? '+971';
}

export function getCountryFromCookie(): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(/geo-country=([A-Z]{2})/);
  return match ? match[1] : null;
}
