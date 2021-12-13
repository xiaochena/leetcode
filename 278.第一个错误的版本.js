/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/** 1 2 3 4 5 6 7 8 9 10 11
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;
    while (left <= right) {
      const mid = left + ((right - left) >> 1);
      if (isBadVersion(mid)) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = solution;
// @after-stub-for-debug-end

// @after-stub-for-debug-begin
module.exports = solution;
// @after-stub-for-debug-end
