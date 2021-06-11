/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = {};
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (map[element] || map[element] === 0) {
      return true;
    }
    map[element] = index;
  }
  return false;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = containsDuplicate;
// @after-stub-for-debug-end
