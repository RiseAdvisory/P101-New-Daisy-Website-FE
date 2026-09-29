import { getInitials } from '../getInitials';

describe('getInitials', () => {
  describe('typical names', () => {
    it('takes one letter from each of the first two words', () => {
      expect(getInitials('John Doe')).toBe('JD');
    });

    it('returns a single initial for a single-word name', () => {
      expect(getInitials('Alice')).toBe('A');
    });

    it('ignores words beyond the first two', () => {
      expect(getInitials('Mary Jane Watson Parker')).toBe('MJ');
    });

    it('uppercases lowercase input', () => {
      expect(getInitials('nora s.')).toBe('NS');
    });

    it('handles the shapes actually used on the testimonials page', () => {
      expect(getInitials('Nora S.')).toBe('NS');
      expect(getInitials('Ahmed F.')).toBe('AF');
    });
  });

  describe('empty and unusable input', () => {
    it.each([
      ['empty string', ''],
      ['whitespace only', '   '],
      ['null', null],
      ['undefined', undefined],
    ])('returns an empty string for %s', (_label, input) => {
      expect(getInitials(input as string | null | undefined)).toBe('');
    });
  });

  describe('messy spacing', () => {
    it('collapses repeated spaces', () => {
      expect(getInitials('John    Doe')).toBe('JD');
    });

    it('ignores leading and trailing whitespace', () => {
      expect(getInitials('  John Doe  ')).toBe('JD');
    });

    it('treats tabs and newlines as separators', () => {
      expect(getInitials('John\tDoe')).toBe('JD');
      expect(getInitials('John\nDoe')).toBe('JD');
    });
  });

  describe('non-ASCII names', () => {
    it('keeps accented Latin letters and uppercases them', () => {
      expect(getInitials('émile Zola')).toBe('ÉZ');
    });

    it('handles Arabic names, where casing does not apply', () => {
      expect(getInitials('نورا سالم')).toBe('نس');
    });

    it('handles CJK names', () => {
      expect(getInitials('李 明')).toBe('李明');
    });

    it('does not split surrogate pairs', () => {
      // Emoji are outside the BMP; taking word[0] would return half a pair.
      expect(getInitials('😀 Doe')).toBe('😀D');
    });
  });

  describe('punctuation', () => {
    it('skips leading punctuation', () => {
      expect(getInitials('(Nora) Smith')).toBe('NS');
      expect(getInitials('"Jay" Kay')).toBe('JK');
    });

    it('keeps apostrophes inside a word', () => {
      expect(getInitials("O'Brien Smith")).toBe('OS');
    });

    it('returns an empty string when a word is only punctuation', () => {
      expect(getInitials('...')).toBe('');
    });
  });

  describe('max parameter', () => {
    it('can return more than two initials', () => {
      expect(getInitials('Mary Jane Watson', 3)).toBe('MJW');
    });

    it('can be limited to one', () => {
      expect(getInitials('John Doe', 1)).toBe('J');
    });
  });
});
