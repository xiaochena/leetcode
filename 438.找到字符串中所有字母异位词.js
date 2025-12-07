/*
 * @lc app=leetcode.cn id=438 lang=javascript
 * @lcpr version=30204
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 *
 * 思路：滑动窗口 + 哈希表计数
 * 1. 利用 哈希表 统计 p 中每个字符出现的次数（构建需求表）。
 * 2. 在 s 中维护一个长度固定为 p.length 的滑动窗口，通过 匹配计数(matchCount) 判断窗口内字符是否符合要求：
 *    - 右指针进：消耗需求，若需求 > 0，matchCount++。
 *    - 窗口超长左指针出：恢复需求，若需求 >= 0，matchCount--。
 *    - 当 matchCount === p.length 时，记录结果。
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  // 统计 p 中每个字符出现的次数
  const pMap = new Map();

  for (const char of p) {
    const num = pMap.get(char) || 0;
    pMap.set(char, num + 1);
  }

  let right = 0;
  let left = 0;
  let matchCount = 0;
  const ans = [];

  while (right < s.length) {
    // 获取当前右指针字符在 pMap 中的计数
    const count = pMap.get(s[right]) || 0;

    // 如果计数大于 0，说明该字符是 p 中需要的有效字符，增加匹配计数
    if (count > 0) {
      matchCount += 1;
    }

    // 将该字符的计数减 1（表示放入窗口）
    pMap.set(s[right], count - 1);

    // 如果当前匹配数量等于 p 的长度，说明找到了一个异位词
    if (matchCount === p.length) {
      ans.push(left);
    }

    // 右指针右移
    right += 1;

    // 当窗口大小超过 p 的长度时，需要收缩左边界
    if (right - left > p.length - 1) {
      const charLeft = s[left];
      // 获取即将移出的字符在 Map 中的需求值
      let countLeft = pMap.get(charLeft);

      // 如果移出的字符计数 >= 0，说明它是有效匹配字符，移除后匹配数减 1
      if (countLeft >= 0) {
        matchCount--;
      }
      // 恢复该字符的计数
      pMap.set(charLeft, countLeft + 1);
      left += 1;
    }
  }

  return ans;
};
// @lc code=end

/*
// @lcpr case=start
// "eebbca"\n"abc"\n
// @lcpr case=end

// @lcpr case=start
// "abab"\n"ab"\n
// @lcpr case=end

 */

// @after-stub-for-debug-begin
module.exports = findAnagrams;
// @after-stub-for-debug-end
