const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  //remove line with error and write your code here
  let arr = []
  let mainRepeat = options.repeatTimes
  let secondRepeat = options.additionRepeatTimes
  if (mainRepeat) {
    for (let i = 0; i < mainRepeat; i++) {
      arr.push(str + '')
      if (options.addition !== '') {
        if (secondRepeat) {
          for (let j = 0; j < secondRepeat; j++) {
            arr.push(options.addition + '')
            options.additionSeparator
              ? arr.push(options.additionSeparator)
              : arr.push('|')
          }
          arr.pop()
        } else {
          arr.push(options.addition)
        }
      }
      options.separator ? arr.push(options.separator) : arr.push('+')
    }
    arr.pop()
  } else {
    arr.push(str + '')
    if (options.addition !== '') {
      if (secondRepeat) {
        for (let j = 0; j < secondRepeat; j++) {
          arr.push(options.addition + '')
          options.additionSeparator
            ? arr.push(options.additionSeparator)
            : arr.push('|')
        }
        arr.pop()
      } else {
        arr.push(options.addition)
      }
    }
  }
  return arr.join('')
}

module.exports = {
  repeater,
}
