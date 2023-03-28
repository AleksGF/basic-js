const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  tempChain: [],
  getLength() {
    return this.tempChain.length;
  },
  addLink(value) {
    if (arguments.length === 0) {
      this.tempChain.push('');
    } else {
      this.tempChain.push(String(value));
    }

    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number'
      || (position !== 1 && !(position - 1))
      || !((position - 1) in this.tempChain)) {
      this.tempChain = [];
      throw new Error('You can\'t remove incorrect link!');
    } else {
      this.tempChain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.tempChain.reverse();
    return this;
  },
  finishChain() {
    const result = `( ${this.tempChain.join(' )~~( ')} )`;
    this.tempChain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};