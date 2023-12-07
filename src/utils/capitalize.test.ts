import { capitalize } from '.';
import { faker } from '@faker-js/faker';

describe('capitalize', () => {
  describe('when string is given', () => {
    it('returns the input with the first letter uppsercase', () => {
      const text = faker.lorem.sentence();
      const lowerStr = text.toLowerCase();

      expect(capitalize(lowerStr)).toBe(text);
    });
  });

  describe('when non string is given', () => {
    it('with a number, returns an empty string', () => {
      const num = faker.number.int();

      // @ts-expect-error
      expect(capitalize(num)).toBe('');
    });

    it('with a boolean, returns an empty string', () => {
      // @ts-expect-error
      expect(capitalize(true)).toBe('');
      // @ts-expect-error
      expect(capitalize(false)).toBe('');
    });

    it('with an object, returns an empty string', () => {
      // @ts-expect-error
      expect(capitalize({})).toBe('');
    });
  });
});
