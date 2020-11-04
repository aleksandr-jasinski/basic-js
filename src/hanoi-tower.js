module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  // solving with formula
  const turns = 2 ** disksNumber - 1;

  const seconds = Math.floor(turns / (turnsSpeed / 3600));

  return { turns, seconds };
};
