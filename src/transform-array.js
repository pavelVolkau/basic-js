const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let myArray = Array.from(arr)
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === '--discard-next') {
      delete myArray[i]
      delete myArray[i + 1]
    }
    if (myArray[i] === '--discard-prev') {
      delete myArray[i]
      delete myArray[i - 1]
    }
    if (myArray[i] === '--double-next') {
      myArray[i] = myArray[i + 1]
    }
    if (myArray[i] === '--double-prev') {
      myArray[i] = myArray[i - 1]
    }
  }
}

module.exports = {
  transform,
}
