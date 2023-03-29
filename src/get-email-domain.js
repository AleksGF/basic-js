const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  if (email.lastIndexOf('@') === -1) throw new Error('Not valid email address');

  return email.slice(email.lastIndexOf('@') + 1);
}

module.exports = {
  getEmailDomain
};