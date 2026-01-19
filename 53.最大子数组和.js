/*
 * @lc app=leetcode.cn id=53 lang=javascript
 * @lcpr version=30204
 *
 * [53] 最大子数组和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 前缀和方法：维护最小前缀和，当前前缀和减去最小前缀和就是最大子数组和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let prefixSum = 0; // 当前前缀和
  let minPrefixSum = 0; // 到目前为止的最小前缀和
  let maxSum = nums[0]; // 最大子数组和

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    // 当前前缀和减去之前的最小前缀和，就是以当前元素结尾的最大子数组和
    maxSum = Math.max(maxSum, prefixSum - minPrefixSum);
    // 更新最小前缀和
    minPrefixSum = Math.min(minPrefixSum, prefixSum);
  }

  return maxSum;
};

// @lc code=end

/*
// @lcpr case=start
// [-2,1,-3,4,-1,2,1,-5,4]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [5,4,-1,7,8]\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = maxSubArray;
// @lcpr-after-debug-end
