/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let result = Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let index = nums.length - 1;

  while (left <= right) {
    let leftAbs = nums[left] ** 2;
    let rightAbs = nums[right] ** 2;
    if (leftAbs > rightAbs) {
      result[index] = leftAbs;
      left++;
    } else {
      result[index] = rightAbs;
      right--;
    }
    index--;
  }
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = sortedSquares;
// @after-stub-for-debug-end
