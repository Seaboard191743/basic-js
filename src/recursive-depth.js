const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(arr.length === 0) {
      return 1;
    }
    let count = 1;
    for(const elem of arr) {
      let counter = 1
      Array.isArray(elem) ? counter += this.calculateDepth(elem) : counter;
      counter > count ? count = counter : count
    }
    return count
  }
};