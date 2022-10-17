const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const ARRAY = n.toString().split('');
  let index = 0;
  if (ARRAY[0] < ARRAY[1]) {
    return parseInt(ARRAY.slice(1, ARRAY.length).join(''), 10);
  }
  for (let i = 1; i < ARRAY.length; i++) {
    if (ARRAY[i] < ARRAY[i - 1]) {
      index = i;
    }
  }
  return parseInt(
    [...ARRAY.slice(0, index), ...ARRAY.slice(index + 1)].join(''),
    10,
  );
}

module.exports = {
  deleteDigit,
};
