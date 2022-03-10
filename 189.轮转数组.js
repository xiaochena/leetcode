/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const { length } = nums;
  const newArr = new Array(length);
  let index = 0;

  for (; index < length; index++) {
    newArr[(index + k) % length] = nums[index];
  }

  for (let i = 0; i < length; ++i) {
    nums[i] = newArr[i];
  }
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = rotate;
// @after-stub-for-debug-end
