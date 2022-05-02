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
  let tempArr = Array.from(arr),
    temp1,
    temp2
  let keyArr = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ]
  for (let i = 0; i < tempArr.length; i++) {
    switch (tempArr[i]) {
      case '--discard-next':
        if (i + 1 < tempArr.length && !keyArr.includes(tempArr[i + 1])) {
          temp1 = tempArr.slice(0, i + 1)
          temp2 = tempArr.slice(i + 1, tempArr.length)
          temp2.shift()
          tempArr = [...temp1, ...temp2]
        }
        break
      case '--discard-prev':
        if (i - 1 >= 0 && !keyArr.includes(tempArr[i - 1])) {
          temp1 = tempArr.slice(0, i - 1)
          temp2 = tempArr.slice(i - 1, tempArr.length)
          temp2.shift()
          tempArr = [...temp1, ...temp2]
        }
        break
      case '--double-next':
        if (i + 1 < arr.length && !keyArr.includes(tempArr[i + 1])) {
          temp1 = tempArr.slice(0, i + 1)
          temp2 = tempArr.slice(i + 1, tempArr.length)
          temp1.push(temp2[0])
          tempArr = [...temp1, ...temp2]
        }
        break
      case '--double-prev':
        if (i - 1 >= 0 && !keyArr.includes(tempArr[i - 1])) {
          temp1 = tempArr.slice(0, i - 1)
          temp2 = tempArr.slice(i - 1, tempArr.length)
          temp1.push(temp2[0])
          tempArr = [...temp1, ...temp2]
          i++
        }
        break
    }
  }
  return tempArr.filter((e) => !keyArr.includes(e))
}

module.exports = {
  transform,
}
