const score = require('./score.js');

describe('Cases with no spare or strike', () => {
  {
    const scoreInput = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    test('These throw should return the score as 90.', () => {
      expect(score(scoreInput)).toEqual(90);
    });
  }
  {
    const scoreInput = [3, 0, 3, 6, 3, 0, 3, 6, 3, 6, 3, 0, 3, 6, 3, 6, 3, 6, 0, 0];
    test('These throw should return the score as 90.', () => {
      expect(score(scoreInput)).toEqual(63);
    });
  }
});

describe('Cases with strikes', () => {
  {
    const scoreInput = [3, 6, 10, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 3, 6];
    test('These throw should return the score as 110.', () => {
      expect(score(scoreInput)).toEqual(110);
    });
  }
});
