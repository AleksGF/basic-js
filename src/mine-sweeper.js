const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const copy = [];
    matrix.forEach(el => {
      copy.push([...el]);
    });

  return copy.map((el, ind, arr) => el.map((subEl, subInd) => {
    let result = 0;
    for (let i=-1; i <=1; i++) {
      for (let j=-1; j<=1; j++) {
        if (i === 0 && j === 0) continue;

        if (arr[ind + i] && arr[ind + i][subInd + j]) result++;
      }
    }
    return result;
  }));
}

module.exports = {
  minesweeper
};