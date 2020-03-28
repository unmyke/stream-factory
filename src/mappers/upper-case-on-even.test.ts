import upperCaseOnEven from './upper-case-on-even';

describe('#upperCaseOnEven', () => {
  let arr: string[];

  beforeEach(() => {
    arr = [];
  });

  describe('when passed empty array', () => {
    test('should return empty array', () => {
      expect(upperCaseOnEven(arr)).toHaveLength(0);
    });
  });

  describe('when passed non-empty array', () => {
    test('should return array with uppercased even char', () => {
      arr = ['a', 'b', 'c', 'd', 'e', 'f'];
      const resultArr = upperCaseOnEven(arr);

      expect(resultArr).toHaveLength(arr.length);
      expect(resultArr).not.toEqual(arr);
      expect(resultArr.map(char => char.toLowerCase())).toEqual(arr);
      expect(resultArr[1]).toBe('B');
      expect(resultArr[3]).toBe('D');
      expect(resultArr[5]).toBe('F');
    });
  });
});
