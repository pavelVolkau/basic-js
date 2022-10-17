const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const SET = new Set(s1.split(''));
  let count = 0;
  SET.forEach((e) => {
    const S1 = [...s1.matchAll(e)].length;
    const S2 = [...s2.matchAll(e)].length;
    count += Math.min(S1, S2);
  });
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
