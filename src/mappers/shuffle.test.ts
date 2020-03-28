import shuffle from './shuffle';

const getRandomArr = () => {
  const arr = [];
  for (let index = 0; index < 100; index++) {
    arr[index] = Math.floor(Math.random() * 100);
  }
  return arr;
};

describe('#shuffle', () => {
  let arr: number[];

  beforeEach(() => {
    arr = [];
  });

  describe('when passed empty array', () => {
    test('should return empty array', () => {
      expect(shuffle(arr)).toHaveLength(0);
    });
  });

  describe('when passed non-empty array', () => {
    test('should return shuffled array', () => {
      arr = getRandomArr();
      const resultArr = shuffle(arr);

      expect(resultArr).toHaveLength(arr.length);
      expect(resultArr).not.toEqual(arr);
      expect(resultArr).toEqual(expect.arrayContaining(arr));
      expect(arr).toEqual(expect.arrayContaining(resultArr));
    });
  });
});
