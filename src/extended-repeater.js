const { NotImplementedError } = require('../extensions/index.js');

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
  const {
    repeatTimes = 0,
    separator = '+',
    addition = '',
    additionRepeatTimes = 0,
    additionSeparator = '|'
  } = options;

  let additionStr = addition;
  let resultStr = '';

  if (additionRepeatTimes && typeof additionRepeatTimes === 'number' && additionRepeatTimes > 0) {
    for (let i = 1; i < additionRepeatTimes; i++) {
      additionStr += String(additionSeparator) + String(addition);
    }
  }

  resultStr = String(str) + additionStr;

  if (repeatTimes && typeof repeatTimes === 'number' && repeatTimes > 0) {
    for (let i = 1; i < repeatTimes; i++) {
      resultStr += String(separator) + String(str) + additionStr;
    }
  }

  return resultStr;
}

module.exports = {
  repeater
};