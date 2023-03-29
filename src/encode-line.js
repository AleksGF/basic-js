const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str || typeof str !== 'string') return str;

  return str
    .match(/(.)\1*/g)
    .reduce((acc, el) => el.length === 1 ? acc + el : acc + el.length + el[0], '');
}

module.exports = {
  encodeLine
};