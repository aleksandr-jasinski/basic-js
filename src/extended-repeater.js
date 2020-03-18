module.exports = function repeater(str, options) {
    if (str === null || str === undefined) {
        return false;
    }
    else if (options.repeatTimes === undefined) {
        return false;
    }
    else if (options.addition !== undefined && options.additionRepeatTimes === undefined) {
        return false;
    }
    else {
        str.toString();

        let repeat = options.repeatTimes;

        if (options.separator === undefined) {
            var sep = '+';
        } else {
            var sep = options.separator;
        }

        let add = options.addition;
        if (add !== undefined) {
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
