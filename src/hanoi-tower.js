module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //throw 'Not implemented';
  // remove line with error and write your code here
  let turnsNum = 2 ** disksNumber - 1;

  let secondsNum = Math.floor(turnsNum / (turnsSpeed / 3600));

  return { turns: turnsNum, seconds: secondsNum };
};
