/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  // if (nums[0] > target) {
  //   return 0;
  // }

  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  return right + 1;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = searchInsert;
// @after-stub-for-debug-end
