module.exports = function repeater(str, options) {
  if (str === undefined) {
    return false;
  } else {
    if (str === null) {
      str = 'null';
    } else {
      str.toString();
    }

    if (options.repeatTimes === undefined) {
      var repeat = 1;
    } else {
      var repeat = options.repeatTimes;
    }

    if (options.separator === undefined) {
      var sep = '+';
    } else {
      var sep = options.separator;
    }

    let add = options.addition;
    if (add === null) {
      add = 'null';
    } else if (add !== undefined) {
      add.toString();
    }

    if (options.additionRepeatTimes === undefined) {
      var addRepeat = 1;
    } else {
      var addRepeat = options.additionRepeatTimes;
    }

    if (options.additionSeparator === undefined) {
      var addSep = '|';
    } else {
      var addSep = options.additionSeparator;
    }

    let repeating = [];

    for (let r = 0; r < repeat; r++) {
      repeating.push(str);

      for (let a = 0; a < addRepeat - 1; a++) {
        repeating.push(add);
        repeating.push(addSep);
      }
      repeating.push(add);
      repeating.push(sep);
    }

    repeating.pop();

    let repeatedStr = repeating.join('');
    return repeatedStr;
  }
};
