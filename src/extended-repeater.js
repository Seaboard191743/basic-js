const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes = 1, separator = "+", addition, additionRepeatTimes, additionSeparator = '|' && ''}) {
  let resultArr = [];
  let additionsArr = [];
  let additionsStr;

  if(addition === undefined) {
    additionSeparator = '';
    addition = '';
  }
  if(!additionRepeatTimes) {
    additionRepeatTimes = 1;
    additionSeparator = '';
  }
  for(let i = 0; i < additionRepeatTimes; i += 1) {
    additionsArr  = [...additionsArr, String(addition)];
  }
    additionsStr = additionsArr.join(additionSeparator);
  for(let j = 0; j < repeatTimes; j += 1) {
    resultArr = [...resultArr, `${String(str)}${additionsStr}`];
  }
  return resultArr.join(separator);
};
  