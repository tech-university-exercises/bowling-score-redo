const funObj = require('./score.js');

describe('Cases with no spare or strike', () => {
  {
    const scoreInput = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    test('These throw should return the score as 90.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(90);
    });
  }
  {
    const scoreInput = [3, 0, 3, 6, 3, 0, 3, 6, 3, 6, 3, 0, 3, 6, 3, 6, 3, 6, 0, 0];
    test('These throw should return the score as 90.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(63);
    });
  }
});

describe('Cases with strikes', () => {
  {
    const scoreInput = [3, 6, 10, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 3, 6];
    test('These throw should return the score as 110.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(110);
    });
  }
});

describe('Cases with last throw having 3 throws', () => {
  {
    const scoreInput = [3, 6, 10, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 3, 7, 3];
    test('These throw should return the score as 115.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(115);
    });
  }
});

describe('Cases with consequtive strikes.', () => {
  {
    const scoreInput = [3, 6, 10, 10, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 3, 7, 3];
    test('These throw should return the score as 129.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(129);
    });
  }
  {
    const scoreInput = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    test('These throw should return the score as 300.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(300);
    });
  }
  {
    const scoreInput = [0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 10];
    test('These throw should return the score as 110 as spare logic has not been done.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(110);
    });
  }
});
