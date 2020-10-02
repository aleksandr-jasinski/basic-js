module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //throw 'Not implemented';
    // remove line with error and write your code here
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        count = Math.max(this.calculateDepth(arr[i]) + 1, count);
      }
    }
    return count;
  }
};
