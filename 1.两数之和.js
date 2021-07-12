/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

/**
 * 方法一：暴力枚举
 * 思路及算法
 * 最容易想到的方法是枚举数组中的每一个数 x，寻找数组中是否存在 target - x。
 * 当我们使用遍历整个数组的方式寻找 target - x 时，需要注意到每一个位于 x 之前的元素都已经和 x 匹配过，因此不需要再进行匹配。而每一个元素不能被使用两次，所以我们只需要在 x 后面的元素中寻找 target - x。

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {
  for (let x = 0; x < nums.length; x++) {
    for (let y = x + 1; y < nums.length; y++) {
      if (nums[x] + nums[y] === target) {
        return [x, y];
      }
    }
  }
};

// @lc code=start
/**
 * 哈希表
 * 思路及算法
 * 方法一的时间复杂度较高的原因是寻找 target - x 的时间复杂度过高。因此，我们需要一种更优秀的方法，能够快速寻找数组中是否存在目标元素。如果存在，我们需要找出它的索引。
 * 使用哈希表，可以将寻找 target - x 的时间复杂度降低到从 O(N)O(N) 降低到 O(1)O(1)。
 * 这样我们创建一个哈希表，对于每一个 x，我们首先查询哈希表中是否存在 target - x，然后将 x 插入到哈希表中，即可保证不会让 x 和自己匹配。

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const Map = {};
  for (let i = 0; i < nums.length; i++) {
    Map[nums[i]] = i;
  }
  // Map = { 2: 0, 7: 1, 11: 2, 15: 3 };
  for (let i = 0; i < nums.length; i++) {
    const subtract = target - nums[i];
    if (Map[subtract]) {
      if (i !== Map[subtract]) {
        return [i, Map[subtract]];
      }
    }
  }
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end
