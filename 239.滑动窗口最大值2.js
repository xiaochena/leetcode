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
 * 核心点：每当新元素入队时，都要从队尾删除所有比它小的元素
 * 因为这个值入队之后，所有比这个值小的，并且在这个值之前的，都不可能是答案。
 * 另外，不管最新遍历到的这个值，大小如何，都要加入队列。因为这个值有可能是后面的答案。
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let left = 1 - k;
  let right = 0;
  const deque = [];
  const ans = [];

  //  left 为窗口左边界，right 为窗口右边界
  while (right < nums.length) {
    // 【1】移除滑出窗口的元素
    // 如果左边界 left > 0，说明窗口已经移动，需检查被移出的 nums[left-1] 是否是当前的队首
    if (left > 0 && deque[0] === nums[left - 1]) {
      deque.shift();
    }

    // 【2】保持队列的单调递减性
    // 如果当前元素 nums[right] 大于队尾元素，说明队尾元素永远不可能成为后续窗口的最大值了
    while (deque.length > 0 && deque[deque.length - 1] < nums[right]) {
      deque.pop();
    }

    // 【3】新元素入队
    // 当前元素作为“潜力股”加入队尾
    deque.push(nums[right]);

    // 【4】记录结果
    // 当 left >= 0 时，说明窗口已完全进入数组，此时队首就是当前窗口的最大值
    if (left >= 0) {
      ans.push(deque[0]);
    }

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
