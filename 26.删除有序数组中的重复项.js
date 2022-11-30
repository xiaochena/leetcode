/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let point1 = 0;
  let point2 = 0;
  const length = nums.length;
  while (point2 < length) {
    if (nums[point2] === nums[point1]) {
      point2 += 1;
    } else {
      point1 += 1;
      nums[point1] = nums[point2];
      point2 += 1;
    }
  }
  nums.length = point1 + 1;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = removeDuplicates;
// @after-stub-for-debug-end