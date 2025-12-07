/*
 * @lc app=leetcode.cn id=3 lang=javascript
 * @lcpr version=30204
 *
 * [3] 无重复字符的最长子串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 官方写法
 * 思路：
 *
 * 1. 滑动窗口：维护一个无重复字符的窗口，使用 Set 判重。
 * 2. 外层循环枚举左边界 i (从 0 到 n-1)。
 * 3. 每次 i 向右移动（i > 0），从 Set 中移除上一个左边界字符 s[i-1]。
 * 4. 内层循环：在不重复的前提下，尽可能让右边界 r 向右拓展。
 * 5. 每次拓展结束后，计算当前窗口长度 r - i + 1 (代码中 r 也是索引，或者用 set.size) 并更新最大值。
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let result = 0;
  const set = new Set();

  let r = -1;
  for (let i = 0; i < s.length; i++) {
    if (i != 0) {
      set.delete(s[i - 1]);
    }
    while (r + 1 < s.length && !set.has(s[r + 1])) {
      set.add(s[r + 1]);
      r += 1;
    }

    result = Math.max(result, set.size);
  }

  return result;
};
// @lc code=end

/**
 * 我的写法
 * 思路：
 * 1. 双指针滑动窗口 [l, r)，初始都为 0。
 * 2. 循环检查右边界 r 指向的字符：
 * 3. 若 s[r] 无重复：加入 Set，r 右移（扩大窗口）。
 * 4. 若 s[r] 有重复：先更新最大长度，然后从 Set 移除左边界 s[l]，l 右移（缩小窗口），直到 s[r] 不再重复。
 * 5. 注意：最后循环结束时需再次更新最大长度（防止一直无重复直到结尾的情况）。
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring1 = function (s) {
  let result = 0;
  const set = new Set();
  let l = 0;
  let r = 0;

  while (r < s.length) {
    if (!set.has(s[r])) {
      set.add(s[r]);
      r += 1;
    } else {
      result = Math.max(result, set.size);
      set.delete(s[l]);
      l += 1;
    }
  }

  result = Math.max(result, set.size);
  return result;
};

/*
// @lcpr case=start
// "abcabcbb"\n
// @lcpr case=end

// @lcpr case=start
// "bbbbb"\n
// @lcpr case=end

// @lcpr case=start
// "pwwkew"\n
// @lcpr case=end

 */

// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end
