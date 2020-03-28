import toggleCase from './toggle-case';

describe('#toggleCase', () => {
  let arr: string[];

  beforeEach(() => {
    arr = [];
  });

  describe('when passed empty array', () => {
    test('should return empty array', () => {
      expect(toggleCase(arr)).toHaveLength(0);
    });
  });

  describe('when passed non-empty array', () => {
    test('should return array with uppercased even char', () => {
      arr = ['a', 'B', 'c', '@', 'd', 'E', 'f', '1', '#'];
      const resultArr = toggleCase(arr);

      expect(resultArr).toHaveLength(arr.length);
      expect(resultArr).not.toEqual(arr);
      expect(resultArr.join('')).toBe('AbC@DeF1#');
    });
  });
});
