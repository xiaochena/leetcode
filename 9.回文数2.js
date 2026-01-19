/*
 * 2022/11/08
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * 思路：反转数字的一半，通过比较前半部分和反转后的后半部分来判断是否是回文
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 特殊情况：
  // 当 x < 0 时，x 不是回文数。比如 -123
  // 同样地，如果数字的最后一位是 0，为了使该数字为回文，则其第一位数字也应该是 0
  // 只有 0 满足这一属性
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let revertedNumber = 0;
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // 当输入为 12321 时，在 while 循环的末尾我们可以得到 x = 12，revertedNumber = 123，
  // 由于处于中位的数字不影响回文（它总是与自己相等），所以我们可以简单地将其去除。 revertedNumber / 10
  return x === revertedNumber || x === Math.floor(revertedNumber / 10);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end
