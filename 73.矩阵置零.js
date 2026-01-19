/*
 * @lc app=leetcode.cn id=73 lang=javascript
 * @lcpr version=30204
 *
 * [73] 矩阵置零
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 坐标记录法
 * 核心思路: 先遍历记录所有 0 的行列坐标，再遍历将对应行列全部置零
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const xCoords = new Set();
  const yCoords = new Set();
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        xCoords.add(col);
        yCoords.add(row);
      }
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (yCoords.has(row) | xCoords.has(col)) {
        matrix[row][col] = 0;
      }
    }
  }

  return matrix;
};
// @lc code=end

/*
// @lcpr case=start
// [[1,1,1],[1,0,1],[1,1,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,1,2,0],[3,4,5,2],[1,3,1,5]]\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = setZeroes;
// @lcpr-after-debug-end
