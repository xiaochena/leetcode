/*
 * @lc app=leetcode.cn id=239 lang=javascript
 * @lcpr version=30204
 *
 * [239] 滑动窗口最大值
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 超出时间限制
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let left = 0;
  let right = k - 1;
  let ans = [];

  while (right < nums.length) {
    let max;
    for (let index = left; index <= right; index++) {
      const num = nums[index];
      max ??= num;
      max = Math.max(num, max);
    }
    ans.push(max);

    right += 1;
    left += 1;
  }

  return ans;
};

// @lc code=end

/*
// @lcpr case=start
// [1,3,-1,-3,5,3,4,7]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = maxSlidingWindow;
// @lcpr-after-debug-end
