const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if(!Array.isArray(arr)) {
    return false
  }
  let filtered = arr.filter(item => typeof item === 'string')
  if(filtered.length === 0) {
    return false
  }
  return filtered.map((item) => item.toUpperCase().trim().charAt(0)).sort().join('')

};
