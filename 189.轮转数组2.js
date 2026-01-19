/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 方法二：数组翻转
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // 处理 k 大于数组长度的情况，取余数得到“实际有效”的旋转步数
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

function reverse(nums, i, j) {
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5,6,7]\n2\n
// @lcpr case=end
 */

// @after-stub-for-debug-begin
module.exports = rotate;
// @after-stub-for-debug-end
