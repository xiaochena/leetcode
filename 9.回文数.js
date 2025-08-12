/*
 * 2022/11/08
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * 思路：
 * 1. 将数字转成字符串
 * 2. 使用双指针：
 *    - left 指向开头
 *    - right 指向结尾
 * 3. 两端向中间移动，如果遇到不相等的字符，直接返回 false。
 * 4. 如果循环结束仍未返回 false，则是回文数，返回 true。
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const str = x.toString();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] === str[right]) {
      left += 1;
      right -= 1;
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end
