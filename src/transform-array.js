module.exports = function transform(arr) {
  //throw 'Not implemented';
  // remove line with error and write your code here
  if (Array.isArray(arr)) {
    let arrTransformed = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i + 1] !== undefined && arr[i] === '--double-next') {
        arrTransformed.push(arr[i + 1]);
      } else if (i > 0 && arr[i] === '--double-prev') {
        if (arr[i - 2] !== '--discard-next') {
          arrTransformed.push(arr[i - 1]);
        }
      } else if (arr[i + 1] !== undefined && arr[i] === '--discard-next') {
        i += 1;
      } else if (i > 0 && arr[i] === '--discard-prev') {
        if (i >= 2 && arr[i - 2] !== '--discard-next') {
          arrTransformed.pop();
        }
      } else if (
        arr[i] !== '--double-prev' &&
        arr[i] !== '--discard-prev' &&
        arr[i] !== '--double-next' &&
        arr[i] !== '--discard-next'
      ) {
        arrTransformed.push(arr[i]);
      }
    }
    return arrTransformed;
  } else {
    throw Error();
  }
};
