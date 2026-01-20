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
 * 二分查找
 * 核心思路: 对每一行都使用一次二分查找，判断 target 是否在该行中
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  for (const row of matrix) {
    const index = search(row, target);
    if (index >= 0) {
      return true;
    }
  }
  return false;
};

const search = (row, target) => {
  let left = 0;
  let right = row.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    const num = row[mid];
    if (num === target) {
      return mid;
    } else if (num > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
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
