module.exports = function transform(arr) {
  //throw 'Not implemented';
  // remove line with error and write your code here
  if (Array.isArray(arr)) {
    let arrTransformed = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--double-next') {
        if (arr[i + 1] !== undefined) {
          arrTransformed.push(arr[i + 1]);
        }
      } else if (arr[i] === '--double-prev') {
        if (arr[i - 1] !== undefined) {
          arrTransformed.push(arr[i - 1]);
        }
      } else if (arr[i] === '--discard-next') {
        i++;
      } else if (arr[i] === '--discard-prev') {
        arrTransformed.pop();
      } else {
        arrTransformed.push(arr[i]);
      }
    }

    return arrTransformed;
  } else {
    throw Error();
  }
};
