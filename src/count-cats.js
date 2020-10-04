const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  return arr.flat(10).reduce((p, n) => {
    if(n === '^^') {
      p+=1
    }
    return p
  }, 0)
};
