const frameLength = 10;

function turnToFrame(scoreInput) {
  const frameScore = [];
  for (let i = 0; i < frameLength - 1; i += 1) {
    if (scoreInput[i * 2] === 10) {
      if (scoreInput[(i + 1) * 2] === 10) {
        frameScore.push(20 + scoreInput[(2 * (i + 2))]);
      } else { frameScore.push(10 + scoreInput[2 * (i + 1)] + scoreInput[(2 * (i + 1)) + 1]); }
    } else frameScore.push(scoreInput[2 * i] + scoreInput[(2 * i) + 1]);
  }
  frameScore[frameLength - 1] = scoreInput[scoreInput.length - 1]
  + scoreInput[scoreInput.length - 2] + scoreInput[scoreInput.length - 3];
  return frameScore;
}

function unifyInput(inputArr) {
  const uniformLengthArray = [];
  for (let i = 0; i < inputArr.length; i += 1) {
    uniformLengthArray.push(inputArr[i]);
    if (inputArr[i] === 10 && uniformLengthArray.length % 2 === 1
       && uniformLengthArray.length <= 18) { uniformLengthArray.push(0); }
  }
  if (uniformLengthArray.length === frameLength * 2) { uniformLengthArray.push(0); }
  return uniformLengthArray;
}

function calScore(scoreArr) {
  const scoreInput = unifyInput(scoreArr);
  // console.log(scoreInput);
  const frameScore = turnToFrame(scoreInput);
  // console.log(frameScore);
  const score = frameScore.reduce((total, throwScore) => total + throwScore);
  return score;
}

module.exports = { calScore, unifyInput, turnToFrame };
