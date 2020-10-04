const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!arr) {
    throw new Error('Error')
  }
  let arr2 = [...arr]
  for(let i = 0; i < arr2.length; i += 1) {
    if(arr2[i] === '--discard-prev') {
      arr2[i] = 'a';
      arr2[i-1] = arr2[i]; 
    }
    if(arr2[i] === '--discard-next') {
      arr2[i] = 'a';
      arr2[i+1] = arr2[i];
    }
    if(arr2[i] === '--double-prev') {
      if(arr2[i-1] != undefined) {
        arr2[i] = arr2[i-1]
      }else {
        arr2[i] = 'a'
      }
    }
    if(arr2[i] === '--double-next') {
      if(arr2[i+1] != undefined) {
        arr2[i] = arr2[i+1]
      }else {
        arr2[i] = 'a'
      }
    }
  }
  return arr2.filter(item => item !== 'a')
};
