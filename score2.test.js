const funObj = require('./score.js');

describe('Inputs of invalid datatypes', () => {
  {
    const scoreInput = [true, false, true, true, true];
    test('booleans will return a false value.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(false);
    });
  }
  {
    const scoreInput = ['a', 'n', 'm', 'o', 'l'];
    test('string will should return a false value.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(false);
    });
  }
  {
    const scoreInput = 'Anmol';
    test('single string will return a false value.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(false);
    });
  }
  {
    const scoreInput = [-1, -2, -3, -4, -5, -6, -7, -8, -9];
    test('negative elements will return a false value.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(false);
    });
  }
  {
    const scoreInput = [1.1, 2.2, 3.3, 4.4, 5.5];
    test('float will return a false value.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(false);
    });
  }
  {
    const scoreInput = 2;
    test('single integer will return a false value.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(false);
    });
  }
  {
    const scoreInput = null;
    test('single integer will return a false value.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(false);
    });
  }
  {
    const scoreInput = undefined;
    test('single integer will return a false value.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(false);
    });
  }
});
