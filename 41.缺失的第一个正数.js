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
 * 原地置换法
 * 核心思路:将每个数字i放到nums[i-1]的位置上，然后找第一个不在正确位置的数字
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    while (num > 0 && num <= nums.length && nums[num - 1] !== num) {
      [nums[num - 1], nums[i]] = [nums[i], nums[num - 1]];
      num = nums[i];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num - 1 != i) {
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

// @lcpr case=start
// [1,1]\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = firstMissingPositive;
// @lcpr-after-debug-end
