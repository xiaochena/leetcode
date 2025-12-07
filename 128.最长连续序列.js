/*
 * @lc app=leetcode.cn id=128 lang=javascript
 * @lcpr version=30204
 *
 * [128] 最长连续序列
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 *
 * 思路：
 *
 * 使用 Set 将数组转为集合，去重。
 * 因为起点数 x 一定是在数组中不存在前驱数 x−1 的，因此如果存在 x−1 即跳过。
 * 之后不断尝试匹配 x+1,x+2,⋯ 是否存在，同时更新最长连续序列长度
 *
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const nemSet = new Set(nums);
  let maxLength = 0;

  for (const num of nemSet) {
    if (!nemSet.has(num - 1)) {
      let currentNum = num;
      let length = 1;
      while (nemSet.has(currentNum + 1)) {
        currentNum += 1;
        length += 1;
      }
      maxLength = Math.max(length, maxLength);
    }
  }
  return maxLength;
};
// @lc code=end

/*
// @lcpr case=start
// [100,4,200,1,3,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,3,7,2,5,8,4,6,0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,0,1,2]\n
// @lcpr case=end

 */

// @after-stub-for-debug-begin
module.exports = longestConsecutive;
// @after-stub-for-debug-end
