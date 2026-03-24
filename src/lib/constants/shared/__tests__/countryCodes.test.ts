import { staticCountryCodes } from '../countryCodes';

describe('staticCountryCodes', () => {
  it('has at least 190 entries', () => {
    expect(staticCountryCodes.length).toBeGreaterThanOrEqual(190);
  });

  it('starts with the 6 GCC countries in the correct order', () => {
    const expectedGcc = [
      'Bahrain',
      'Kuwait',
      'Oman',
      'Qatar',
      'Saudi Arabia',
      'United Arab Emirates',
    ];
    const firstSixNames = staticCountryCodes.slice(0, 6).map((c) => c.name);
    expect(firstSixNames).toEqual(expectedGcc);
  });

  it('every entry has a non-empty country_code starting with "+"', () => {
    for (const entry of staticCountryCodes) {
      expect(entry.country_code).toBeTruthy();
      expect(entry.country_code.startsWith('+')).toBe(true);
    }
  });

  it('every entry has a non-empty name', () => {
    for (const entry of staticCountryCodes) {
      expect(entry.name).toBeTruthy();
    }
  });

  it('every entry has an image that is a valid SVG data URI', () => {
    for (const entry of staticCountryCodes) {
      expect(entry.image.startsWith('data:image/svg+xml,')).toBe(true);
    }
  });

  it('has no duplicate country names', () => {
    const names = staticCountryCodes.map((c) => c.name);
    const uniqueNames = new Set(names);
    expect(uniqueNames.size).toBe(names.length);
  });
});
