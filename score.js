function turnToFrame(scoreInput) {
  const frameScore = [];
  const frameLength = 10;
  for (let i = 0; i < frameLength; i += 1) {
    frameScore.push(scoreInput[2 * i] + scoreInput[(2 * i) + 1]);
  }
  return frameScore;
}

function calScore(scoreInput) {
  const frameScore = turnToFrame(scoreInput);
  console.log(frameScore);
  const score = frameScore.reduce((total, throwScore) => total + throwScore);
  return score;
}

module.exports = calScore;
