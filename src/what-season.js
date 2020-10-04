const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const season = {
    11: 'winter',
    0: 'winter',
    1: 'winter',
    2: 'spring',
    3: 'spring',
    4: 'spring',
    5: 'summer',
    6: 'summer',
    7: 'summer',
    8: 'autumn',
    9: 'autumn',
    10: 'autumn'
  }
  if(!date) {
    return 'Unable to determine the time of year!'
  }
  if(!(date instanceof Date) || Object.keys(date).length) {
    throw new Error('THROWN')
  }
  const month = date.getMonth()
  return season[month]

};
