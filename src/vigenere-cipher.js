const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    if (typeof isDirect !== 'boolean') {
      throw new Error('Argument must be boolean');
    }

    this.isDirect = isDirect;
  }

  encrypt(message = null, key = null) {
    if (!message
      || typeof message !== 'string'
      || !key
      || typeof key !== 'string'
    ) {
      throw new Error('Incorrect arguments!')
    }

    let encryptKeys = key
      .toUpperCase()
      .padEnd(message.length, key.toUpperCase())
      .split('')
      .map(s => s.charCodeAt(0) - 65);
    let i = 0;
    let encryptedMessage = message
      .toUpperCase()
      .split('')
      .map(s => {
        let n = s.charCodeAt(0);

        if (n < 65 || n > 90) return s;

        n = n + encryptKeys[i++];
        n = n > 90 ? n - 26 : n;

        return String.fromCharCode(n);
      })
      .join('');

    if (!this.isDirect) {
      encryptedMessage = encryptedMessage.split('').reverse().join('');
    }

    return encryptedMessage;
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage
      || typeof encryptedMessage !== 'string'
      || !key
      || typeof key !== 'string'
    ) {
      throw new Error('Incorrect arguments!')
    }

    let encryptKeys = key
      .toUpperCase()
      .padEnd(encryptedMessage.length, key.toUpperCase())
      .split('')
      .map(s => s.charCodeAt(0) - 65);
    let i = 0;
    let msgToEncrypt = encryptedMessage
      .split('')
      .map(s => {
        let n = s.charCodeAt(0);

        if (n < 65 || n > 90) return s;

        n = n - encryptKeys[i++];
        n = n < 65 ? n + 26 : n;

        return String.fromCharCode(n);
      })
      .join('')
    ;

    msgToEncrypt = this.isDirect ? msgToEncrypt : msgToEncrypt.split('').reverse().join('');

    return msgToEncrypt;
  }
}

module.exports = {
  VigenereCipheringMachine
};