/*
 * @lc app=leetcode.cn id=240 lang=javascript
 * @lcpr version=30204
 *
 * [240] 搜索二维矩阵 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Z 字形查找
 * 核心思路: 从右上角开始，利用矩阵的排序特性，当前值大于目标则左移，小于目标则下移，直到找到目标或越界。
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let x = 0;
  let y = matrix[0].length - 1;

  while (x < matrix?.length && y >= 0) {
    const num = matrix[x][y];
    if (num === target) {
      return true;
    }
    if (num > target) {
      y -= 1;
    } else {
      x += 1;
    }
  }

  return false;
};

// @lc code=end

/*
// @lcpr case=start
// [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n5\n
// @lcpr case=end

// @lcpr case=start
// [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n20\n
// @lcpr case=end

// @lcpr case=start
// [[5,6,10],[6,10,13],[10,13,18],[14,18,19]]\n14\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = searchMatrix;
// @lcpr-after-debug-end
