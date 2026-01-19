/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 方法一：使用额外的数组
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const newArr = new Array(nums.length);

  for (let i = 0; i < nums.length; ++i) {
    newArr[(i + k) % nums.length] = nums[i];
  }
  for (let i = 0; i < nums.length; ++i) {
    nums[i] = newArr[i];
  }
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = rotate;
// @after-stub-for-debug-end
