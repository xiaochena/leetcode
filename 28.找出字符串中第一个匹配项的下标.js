/*
 * @lc app=leetcode.cn id=28 lang=javascript
 * @lcpr version=30203
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let p1 = 0;
  const { length } = needle;
  while (p1 < haystack?.length) {
    const str = haystack.slice(p1, length + p1);
    if (str === needle) {
      return p1;
    }
    p1 += 1;
  }
  return -1;
};
// @lc code=end

/*
// @lcpr case=start
// "sadbutsad"\n"sad"\n
// @lcpr case=end

// @lcpr case=start
// "leetcode"\n"leeto"\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = strStr;
// @lcpr-after-debug-end
