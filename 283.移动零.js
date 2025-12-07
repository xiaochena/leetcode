/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lcpr-template-start

// @lcpr-template-end

// @lc code=start
/**
 *
 * 思路：
 * 类似选择排序，维护一个指针 selectIndex，不断把“需要放前面”的元素交换到前面。
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let selectIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num !== 0) {
      [nums[selectIndex], nums[i]] = [nums[i], nums[selectIndex]];
      selectIndex += 1;
    }
  }
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = moveZeroes;
// @after-stub-for-debug-end
