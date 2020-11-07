module.exports = function repeater(str, options) {
  if (str === undefined) {return false;}

  let string;
  if (str === null) {
    string = 'null';
  } else {
    string = str.toString();
  }

  let add = options.addition;
  if (add === null) {
    add = 'null';
  } else if (add !== undefined) {
    add.toString();
  }

  const repeat = options.repeatTimes  === undefined ? 1 : options.repeatTimes;

  const sep = options.separator === undefined ? '+' : options.separator;

  const addRepeat = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;

  const addSep = options.additionSeparator === undefined ? '|' : options.additionSeparator;

  const repeating = [];

  for (let r = 0; r < repeat; r += 1) {
    repeating.push(string);

    for (let a = 0; a < addRepeat - 1; a += 1) {
      repeating.push(add);
      repeating.push(addSep);
    }
    repeating.push(add);
    repeating.push(sep);
  }

  repeating.pop();

  return repeating.join('');

};
