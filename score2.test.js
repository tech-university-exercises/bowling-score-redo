const funObj = require('./score.js');

describe('Inputs of invalid datatypes', () => {
  {
    const scoreInput = [true, false, true, true, true];
    test('booleans will return a false value.', () => {
      expect(funObj.validateInputType(scoreInput)).toEqual(false);
    });
  }
  {
    const scoreInput = [1, 'n', 3, 'o', 'l'];
    test('string will should return a false value.', () => {
      expect(funObj.validateInputType(scoreInput)).toEqual(false);
    });
  }
  {
    const scoreInput = 'Anmol';
    test('single string will return a false value.', () => {
      expect(funObj.validateInputType(scoreInput)).toEqual(false);
    });
  }
  {
    const scoreInput = [-1, -2, -3, -4, -5, -6, -7, -8, -9];
    test('negative elements will return a false value.', () => {
      expect(funObj.validateInputType(scoreInput)).toEqual(false);
    });
  }
  {
    const scoreInput = [1.1, 2.2, 3.3, 4.4, 5.5];
    test('float will return a false value.', () => {
      expect(funObj.validateInputType(scoreInput)).toEqual(false);
    });
  }
  {
    const scoreInput = 2;
    test('single integer will return a false value.', () => {
      expect(funObj.validateInputType(scoreInput)).toEqual(false);
    });
  }
  {
    const scoreInput = null;
    test('single integer will return a false value.', () => {
      expect(funObj.validateInputType(scoreInput)).toEqual(false);
    });
  }
  {
    const scoreInput = undefined;
    test('single integer will return a false value.', () => {
      expect(funObj.validateInputType(scoreInput)).toEqual(false);
    });
  }
  {
    const scoreInput = [9, NaN, 9, NaN, 9, NaN, 9, NaN, 9, NaN, 9, NaN,
      9, NaN, 9, NaN, 9, NaN, 9, NaN];
    test('These throw should return the score as false.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(false);
    });
  }
});

describe('Cases with insuffient or more than required output.', () => {
  {
    const scoreInput = [3, 7, 10, 3, 10, 10, 3, 2, 3, 1, 10, 10, 10, 10];
    test('These throw should return the score as false.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(false);
    });
  }
  {
    const scoreInput = [10, 0, 10, 10, 0, 10, 10, 0, 10, 10, 10, 10, 10, 10, 0, 10, 10, 0, 10, 4];
    test('These throw should return the score as false.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(false);
    });
  }
  {
    const scoreInput = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    test('These throw should return the score as false.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(false);
    });
  }
  {
    const scoreInput = [0, true, 0, null, 0, NaN, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    test('These throw should return the score as false.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(false);
    });
  }
  {
    const scoreInput = [];
    test('These throw should return the score as false.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(false);
    });
  }
});
