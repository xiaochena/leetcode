/*
 * @lc app=leetcode.cn id=88 lang=javascript
 * @lcpr version=30202
 *
 * [88] 合并两个有序数组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
};
// @lc code=end

/*
// @lcpr case=start
// [-1,0,0,3,3,3,0,0,0]\n6\n[1,2,2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n[]\n0\n
// @lcpr case=end

// @lcpr case=start
// [0]\n0\n[1]\n1\n
// @lcpr case=end

 */

// @after-stub-for-debug-begin
module.exports = merge;
// @after-stub-for-debug-end
