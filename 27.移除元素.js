/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    if (nums[left] === val) {
      nums[left] = nums[right];
      right -= 1;
    } else {
      left += 1;
    }
  }
  return left;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = removeElement;
// @after-stub-for-debug-end
