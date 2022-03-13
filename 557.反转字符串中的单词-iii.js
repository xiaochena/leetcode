/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const sArr = s.split(" ").map((i) => i.split("").reverse().join(""));
  return sArr.join(' ');
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = reverseWords;
// @after-stub-for-debug-end
