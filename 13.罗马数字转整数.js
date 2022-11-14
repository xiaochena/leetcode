/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let count = 0;

  let left = 0;
  const length = s.length;

  while (left < length) {
    let num = map[s[left]];
    const next = map[s[left + 1]];
    if (next && num < next) {
      num = -num;
    }

    count += num;
    left += 1;
  }
  return count;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = romanToInt;
// @after-stub-for-debug-end
