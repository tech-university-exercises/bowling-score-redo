const funObj = require('./score.js');

describe('Given valid input, function should covert it to an array of length 21', () => {
  {
    const scoreInput = [10, 10, 10, 10, 10, 10, 10, 10, 10, 3, 6];
    test('All throws are strike except the last one returns an array of length 21.', () => {
      expect(funObj.unifyInput(scoreInput).length).toEqual(21);
    });
    test('All throws are strike except the last one returns expectd array.', () => {
      expect(funObj.unifyInput(scoreInput)).toEqual([10, 0, 10, 0, 10, 0, 10, 0, 10,
        0, 10, 0, 10, 0, 10, 0, 10, 0, 3, 6, 0]);
    });
  }
  {
    const scoreInput = [3, 0, 3, 6, 3, 0, 3, 6, 3, 6, 3, 0, 3, 6, 3, 6, 3, 6, 0, 0];
    test('A normal game with no strikes or spare returns an array of length 21.', () => {
      expect(funObj.unifyInput(scoreInput).length).toEqual(21);
    });
    test('A normal game with no strikes or spare returns the expected array.', () => {
      expect(funObj.unifyInput(scoreInput)).toEqual([3, 0, 3, 6, 3, 0, 3, 6, 3, 6, 3, 0, 3, 6, 3, 6,
        3, 6, 0, 0, 0]);
    });
  }
  {
    const scoreInput = [3, 0, 3, 6, 3, 0, 3, 6, 3, 6, 3, 0, 3, 6, 3, 6, 3, 6, 10, 10, 10];
    test('A normal game with no strikes or spare.', () => {
      expect(funObj.unifyInput(scoreInput).length).toEqual(21);
    });
    test('A normal game with no strikes or spare.', () => {
      expect(funObj.unifyInput(scoreInput)).toEqual([3, 0, 3, 6, 3, 0, 3, 6, 3, 6, 3, 0, 3, 6, 3, 6,
        3, 6, 10, 10, 10]);
    });
  }
  {
    const scoreInput = [0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 10];
    test('These throw should return the same array as no strike is there.', () => {
      expect(funObj.unifyInput(scoreInput).length).toEqual(21);
    });
    test('These throw should return the same array as no strike is there.', () => {
      expect(funObj.unifyInput(scoreInput)).toEqual([0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0,
        10, 0, 10, 0, 10, 0, 10, 10]);
    });
  }
});
