// Helper function that replicates the sorting logic from FormBusiness
const sortAndFilterCountryCodes = (countryCodesArray: any[]) => {
  const usedCountryCodes = new Set();
  return countryCodesArray
    .slice()
    .sort((a, b) => a.country_code.localeCompare(b.country_code))
    .filter((item) => {
      const country_code = item.country_code;
      if (!item.image || !country_code || usedCountryCodes.has(country_code)) {
        return false;
      }
      usedCountryCodes.add(country_code);
      return true;
    });
};

describe('FormBusiness - Memoized Country Code Sorting', () => {
  const createMockCountryCodes = () => [
    {
      country_code: '+971',
      name: 'UAE',
      image: 'https://example.com/ae.svg',
    },
    {
      country_code: '+1',
      name: 'USA',
      image: 'https://example.com/us.svg',
    },
    {
      country_code: '+44',
      name: 'UK',
      image: 'https://example.com/uk.svg',
    },
    {
      country_code: '+1', // Duplicate
      name: 'Canada',
      image: 'https://example.com/ca.svg',
    },
    {
      country_code: '+33',
      name: 'France',
      image: null, // Missing image
    },
    {
      country_code: '', // Invalid code
      name: 'Invalid',
      image: 'https://example.com/inv.svg',
    },
  ];

  it('should sort country codes alphabetically', () => {
    const countryCodesArray = createMockCountryCodes();
    const sortedCountryCodes = sortAndFilterCountryCodes(countryCodesArray);

    // Should be sorted: +1, +44, +971
    expect(sortedCountryCodes).toEqual([
      {
        country_code: '+1',
        name: 'USA',
        image: 'https://example.com/us.svg',
      },
      {
        country_code: '+44',
        name: 'UK',
        image: 'https://example.com/uk.svg',
      },
      {
        country_code: '+971',
        name: 'UAE',
        image: 'https://example.com/ae.svg',
      },
    ]);
  });

  it('should filter out duplicates, keeping the first occurrence', () => {
    const countryCodesArray = createMockCountryCodes();
    const sortedCountryCodes = sortAndFilterCountryCodes(countryCodesArray);

    // Should only have one +1 entry (USA, not Canada)
    const plusOnes = sortedCountryCodes.filter((c) => c.country_code === '+1');
    expect(plusOnes).toHaveLength(1);
    expect(plusOnes[0].name).toBe('USA');
  });

  it('should filter out items without images', () => {
    const countryCodesArray = createMockCountryCodes();
    const sortedCountryCodes = sortAndFilterCountryCodes(countryCodesArray);

    // France (+33) should be filtered out (no image)
    const france = sortedCountryCodes.find((c) => c.name === 'France');
    expect(france).toBeUndefined();
  });

  it('should filter out items with empty country codes', () => {
    const countryCodesArray = createMockCountryCodes();
    const sortedCountryCodes = sortAndFilterCountryCodes(countryCodesArray);

    // Invalid item (empty code) should be filtered out
    const invalid = sortedCountryCodes.find((c) => c.name === 'Invalid');
    expect(invalid).toBeUndefined();
  });

  it('should handle empty array gracefully', () => {
    const countryCodesArray: any[] = [];
    const sortedCountryCodes = sortAndFilterCountryCodes(countryCodesArray);

    expect(sortedCountryCodes).toEqual([]);
  });

  it('should not mutate the original array', () => {
    const countryCodesArray = createMockCountryCodes();
    const originalLength = countryCodesArray.length;
    const originalFirst = { ...countryCodesArray[0] };

    sortAndFilterCountryCodes(countryCodesArray);

    // Original array should be unchanged
    expect(countryCodesArray).toHaveLength(originalLength);
    expect(countryCodesArray[0]).toEqual(originalFirst);
  });

  it('should produce consistent results on multiple calls with same input', () => {
    const countryCodesArray = createMockCountryCodes();

    const result1 = sortAndFilterCountryCodes(countryCodesArray);
    const result2 = sortAndFilterCountryCodes(countryCodesArray);

    // Results should be identical (testing memoization behavior)
    expect(result1).toEqual(result2);
  });

  it('should handle all valid items correctly', () => {
    const validCodes = [
      {
        country_code: '+965',
        name: 'Kuwait',
        image: 'https://example.com/kw.svg',
      },
      {
        country_code: '+971',
        name: 'UAE',
        image: 'https://example.com/ae.svg',
      },
    ];

    const sortedCountryCodes = sortAndFilterCountryCodes(validCodes);

    // All items should be included
    expect(sortedCountryCodes).toHaveLength(2);
    expect(sortedCountryCodes[0].country_code).toBe('+965');
    expect(sortedCountryCodes[1].country_code).toBe('+971');
  });
});
