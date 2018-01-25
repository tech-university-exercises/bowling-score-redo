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
    const scoreInput = [0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 10];
    test('These throw should return the score as 110 as spare logic has not been done.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(110);
    });
  }
  {
    const scoreInput = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    test('These throw should return the score as 300.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(300);
    });
  }
});

describe('Cases with spares.', () => {
  {
    const scoreInput = [3, 7, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    test('These throw should return the score as 94.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(94);
    });
  }
  {
    const scoreInput = [3, 7, 3, 7, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    test('These throw should return the score as 98.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(98);
    });
  }
});

describe('Cases with spares, strikes and normal throws.', () => {
  {
    const scoreInput = [3, 7, 10, 3, 0, 4, 5, 0, 10, 10, 3, 2, 3, 1, 10, 10, 10, 10];
    test('These throw should return the score as 149.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(149);
    });
  }
  {
    const scoreInput = [10, 0, 10, 10, 0, 10, 10, 0, 10, 10, 0, 10, 10, 0, 10, 4];
    test('These throw should return the score as 198.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(194);
    });
  }
  {
    const scoreInput = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    test('These throw should return the score as 0.', () => {
      expect(funObj.calScore(scoreInput)).toEqual(0);
    });
  }
});

describe('some random test cases.', () => {
  {
    const scoreInput = [3, 6, 10, 7, 2, 5, 5, 2, 5, 4, 5, 7, 1, 10, 10, 4, 5];
    test('when input scores contains some strikes and spares', () => {
      expect(funObj.calScore(scoreInput)).toBe(125);
    });
  }
  {
    const scoreInput = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0];
    test('when input contains only strikes', () => {
      expect(funObj.calScore(scoreInput)).toBe(290);
    });
  }
});
