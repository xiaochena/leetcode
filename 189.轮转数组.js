/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

const gcd = (x, y) => (y ? gcd(y, x % y) : x);
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let temp;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = rotate;
// @after-stub-for-debug-end
