const { NotImplementedError } = require('../extensions/index.js')

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  try {
    let isData = date.getTime()
  } catch (err) {
    throw new Error('Invalid date!')
  }
  return date.getMonth() < 2
    ? 'winter'
    : date.getMonth() < 5
    ? 'spring'
    : date.getMonth() < 8
    ? 'summer'
    : date.getMonth() < 11
    ? 'autumn'
    : 'winter'
}

module.exports = {
  getSeason,
}
