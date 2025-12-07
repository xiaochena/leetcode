/*
 * @lc app=leetcode.cn id=15 lang=javascript
 * @lcpr version=30204
 *
 * [15] 三数之和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 思路：
 * 1. 先排序数组（方便去重和双指针移动）
 * 2. 固定第一个数 nums[i]，用双指针在剩余部分找另外两个数， l 指向 i + 1 位置，r 指向最后的位置(nums.length - 1)
 * 3. 如果三数之和 = 0：记录结果，移动指针并去重
 * 4. 如果和 < 0：左指针右移（增大和）
 * 5. 如果和 > 0：右指针左移（减小和）
 * 6. 关键：去重处理，跳过重复元素避免重复三元组
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        result.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] == nums[l + 1]) l += 1; // 去重
        while (l < r && nums[r] == nums[r - 1]) r -= 1; // 去重
        l += 1;
        r -= 1;
      } else if (sum < 0) {
        l += 1;
      } else {
        r -= 1;
      }
    }
  }

  return result;
};
// @lc code=end

/*
// @lcpr case=start
// [-1,0,1,2,-1,-4]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n
// @lcpr case=end

 */

// @after-stub-for-debug-begin
module.exports = threeSum;
// @after-stub-for-debug-end
