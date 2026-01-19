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
 * 思路：
 *
 * 1. 核心公式：
 *  - 假设子数组 [i..j] 的和为 k  则有 P[j] - P[i-1] = k
 *  - 移项变形得：P[i-1] = P[j] - k (即：当前前缀和 - k = 之前某个位置的前缀和)
 * 2. 算法流程：
 *  - 维护一个 map 记录【前缀和】:【出现的次数】。
 *  - 遍历数组：
 *    a. 更新 map
 *    b. 在 map 中找是否存在 (map - k)，若有，则 count 加上其出现次数。
 *    c. 将当前 pre(前缀和) 存入 map (出现的次数 +1)。
 * 3. 关键边界：
 *  - 初始化 map = {0: 1}。
 *  - 意义：代表前缀和为 0 出现过 1 次，用于处理“从索引 0 开始就满足和为 k”的情况。
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const mp = new Map();
  mp.set(0, 1);
  let count = 0,
    pre = 0;
  for (const x of nums) {
    pre += x;
    if (mp.has(pre - k)) {
      count += mp.get(pre - k);
    }
    if (mp.has(pre)) {
      mp.set(pre, mp.get(pre) + 1);
    } else {
      mp.set(pre, 1);
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
