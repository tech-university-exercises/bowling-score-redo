const score = require('./score.js');

describe('Cases with no spare or strike', () => {
  {
    const scoreInput = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    test('These throw should return the score as 90.', () => {
      expect(score(scoreInput)).toEqual(90);
    });
  }
});
