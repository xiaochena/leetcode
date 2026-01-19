/*
 * @lc app=leetcode.cn id=41 lang=javascript
 * @lcpr version=30204
 *
 * [41] 缺失的第一个正数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 原地标记法
 * 核心思路: 利用数组下标和正负号来标记判断数字是否存在，将数字i的存在性记录在 nums[i-1] 的正负号上
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num <= 0) {
      nums[i] = nums.length + 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const absNum = Math.abs(nums[i]);
    if (absNum <= nums.length) {
      nums[absNum - 1] = -Math.abs(nums[absNum - 1]);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > 0) {
      return i + 1;
    }
  }

  return nums.length + 1;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,0]\n
// @lcpr case=end

// @lcpr case=start
// [3,4,-1,1]\n
// @lcpr case=end

// @lcpr case=start
// [7,8,9,11,12]\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = firstMissingPositive;
// @lcpr-after-debug-end
