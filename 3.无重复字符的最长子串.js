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
var lengthOfLongestSubstring = function (s) {
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
// @lc code=end

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
