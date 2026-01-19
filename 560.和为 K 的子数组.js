/*
 * @lc app=leetcode.cn id=560 lang=javascript
 * @lcpr version=30204
 *
 * [560] 和为 K 的子数组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

/**
 * 暴力解：枚举 [0..i] 里所有的下标 j 来判断是否符合条件
 */
var subarraySum = function (nums, k) {
  let count = 0;
  for (let start = 0; start < nums.length; ++start) {
    let sum = 0;
    for (let end = start; end >= 0; --end) {
      sum += nums[end];
      if (sum == k) {
        count++;
      }
    }
  }
  return count;
};

// @lc code=end

/*
// @lcpr case=start
// [1,1,1]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n3\n
// @lcpr case=end

// @lcpr case=start
// [3,4,7,2,-3,1,4,2,1]\n7\n
// @lcpr case=end
 */

// @lcpr-after-debug-begin
module.exports = subarraySum;
// @lcpr-after-debug-end
