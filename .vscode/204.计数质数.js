/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let arr = new Array(n);
  let result = 0;
  for (let i = 2; i < n; i++) {
    
    if (!arr[i]) {
      result++;
      for (let j = i + i; j < n; j += i) {
        arr[j] = true;
      }
    }
  }
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = countPrimes;
// @after-stub-for-debug-end
