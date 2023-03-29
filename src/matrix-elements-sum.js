const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix ) {
  return matrix.reduce((acc0, row, rowInd, arr) => acc0 + row.reduce(
    (acc1, el, elInd) => {
      if (rowInd === 0) return acc1 + el;
      if (arr[rowInd - 1][elInd] === 0) return acc1;
      return acc1 + el;
    }, 0
  ), 0);
}

module.exports = {
  getMatrixElementsSum
};