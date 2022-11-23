/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const prefix = strs.reduce((prefix, value) => {
    const length = prefix.length;
    let str = "";
    for (let index = 0; index < length; index++) {
      if (prefix[index] && prefix[index] === value[index]) {
        str += prefix[index];
      } else {
        break;
      }
    }
    return str;
  });
  return prefix;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = longestCommonPrefix;
// @after-stub-for-debug-end
