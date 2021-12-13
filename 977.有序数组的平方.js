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
  let left = 0;
  let right = nums.length - 1;
  let result = Array(nums.length);
  let index = nums.length - 1;
  while (left <= right) {
    if (nums[left] ** 2 < nums[right] ** 2) {
      result[index] = nums[right] ** 2;
      right--;
      index--;
    } else {
      result[index] = nums[left] ** 2;
      left++;
      index--;
    }
  }
  return result;
};
// @lc code=end
