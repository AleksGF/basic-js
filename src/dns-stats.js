const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains ) {
  const result = {};
  domains.forEach(domain => {
    domain.split('.').reverse().forEach((w, i, arr) => {
      const subDomain = '.' + arr.filter((el, ind) => ind <= i).join('.');
      result.hasOwnProperty(subDomain) ? result[subDomain] += 1 : result[subDomain] = 1;
    })
  });

  return result;
}

module.exports = {
  getDNSStats
};