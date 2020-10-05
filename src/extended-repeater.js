const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes = 1, separator = "+", addition, additionRepeatTimes, additionSeparator = '|' && ''}) {
  const arr = [];
  if(!addition) {
    additionSeparator = '';
    addition = ''
  }
  if(!additionRepeatTimes) {
    additionRepeatTimes = 1
    additionSeparator = ''
  }
  
  for(let i = 0; i < repeatTimes; i += 1) {
    arr.push(String(str).concat((`${String(addition)}${additionSeparator}`).repeat(additionRepeatTimes)))
  }
  return arr.join(separator)
};
  