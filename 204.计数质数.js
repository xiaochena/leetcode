/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/** 方法一：枚举
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
const isPrime = (x) => {
  for (let i = 2; i * i <= x; ++i) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
};

var countPrimes = function (n) {
  let ans = 0;
  for (let i = 2; i < n; ++i) {
    ans += isPrime(i);
  }
  return ans;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = countPrimes;
// @after-stub-for-debug-end
