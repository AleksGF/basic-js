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
  let result = 0;
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  arr1.forEach(el => {
    const i = arr2.indexOf(el);
    if (i !== -1) {
      result += 1;
      arr2.splice(i, 1);
    }
  });

  return result;
}

module.exports = {
  getCommonCharacterCount
};
