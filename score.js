const frameLength = 10;

function turnToFrame(scoreInput) {
  const frameScore = [];
  for (let i = 0; i < frameLength; i += 1) {
    if (scoreInput[i * 2] === 10) {
      frameScore.push(10 + scoreInput[2 * (i + 1)] + scoreInput[(2 * (i + 1)) + 1]);
    } else frameScore.push(scoreInput[2 * i] + scoreInput[(2 * i) + 1]);
  }
  frameScore[frameLength - 1] += scoreInput[scoreInput.length - 1];
  return frameScore;
}

function unifyInput(inputArr) {
  const uniformLengthArray = [];
  for (let i = 0; i < inputArr.length; i += 1) {
    uniformLengthArray.push(inputArr[i]);
    if (inputArr[i] === 10) { uniformLengthArray.push(0); }
  }
  if (uniformLengthArray.length === frameLength * 2) { uniformLengthArray.push(0); }
  return uniformLengthArray;
}

function calScore(scoreArr) {
  const scoreInput = unifyInput(scoreArr);
  const frameScore = turnToFrame(scoreInput);
  console.log(frameScore);
  const score = frameScore.reduce((total, throwScore) => total + throwScore);
  return score;
}

module.exports = calScore;
