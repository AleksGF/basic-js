const { NotImplementedError } = require('../extensions/index.js');

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
  if (!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!");

  const arrCopy = [...arr];
  let i = 0;

  const actions = {
    '--discard-next': (i, arrCopy) => {
      if (i < arrCopy.length - 1 && !Object.keys(actions).includes(arrCopy[i + 1])) {
        arrCopy[i+1] = '--discarded';
      }

      return i;
    },
    '--discard-prev': (i, arrCopy) => {
      if (i > 0 && !Object.keys(actions).includes(arrCopy[i - 1])) {
        arrCopy[i - 1] = '--discarded';
      }

      return i;
    },
    '--double-next': (i, arrCopy) => {
      if (i < arrCopy.length - 1 && !Object.keys(actions).includes(arrCopy[i + 1])) {
        arrCopy.splice(i + 1, 0, arrCopy[i + 1]);
        return i + 1;
      }

      return i;
    },
    '--double-prev': (i, arrCopy) => {
      if (i > 0 && !Object.keys(actions).includes(arrCopy[i - 1])) {
        arrCopy.splice(i - 1, 0, arrCopy[i - 1]);
        return i + 1;
      }

      return i;
    },
    '--discarded': null,
  };

  while (i < arrCopy.length) {
    if (Object.keys(actions).includes(arrCopy[i]) && arrCopy[i] !== '--discarded') {
      i = actions[arrCopy[i]](i, arrCopy);
    }
    i++;
  }

  return arrCopy.filter(el => !Object.keys(actions).includes(el));
}

module.exports = {
  transform
};
