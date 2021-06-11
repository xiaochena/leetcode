/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const result = [];
  const map = new Array(nums.length);
  nums.forEach((item) => {
    if (map[item - 1]) {
      result.push(item);
    }
    map[item - 1] = true;
  });

  for (let index = 0; index < map.length; index++) {
    if (!map[index]) {
      result.push(index + 1);
      return result;
    }
  }
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = findErrorNums;
// @after-stub-for-debug-end
