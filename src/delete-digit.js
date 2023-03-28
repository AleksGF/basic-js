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
  const possibleNumbers = [];
  n.toString().split('').forEach((el, i, arr) => {
    possibleNumbers.push(parseInt(arr.filter((elem, ind) => ind !== i).join('')));
  });

  return possibleNumbers.reduce((acc, el) => el > acc ? el : acc, possibleNumbers[0]);
}

module.exports = {
  deleteDigit
};