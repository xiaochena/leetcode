/*
 * @lc app=leetcode.cn id=76 lang=javascript
 * @lcpr version=30204
 *
 * [76] 最小覆盖子串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 方案一：
 * 核心逻辑：如果当前窗口已经包含了 t 中的所有字符（满足覆盖条件）
 * 此时尝试通过移动左指针来“收缩窗口”，以寻找更短的合法子串
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // 1. 统计目标字符串 t 中每个字符需要的频率
  const tMap = new Map();
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    const freq = tMap.get(char) ?? 0;
    tMap.set(char, freq + 1);
  }

  // 2. 初始化滑动窗口的左右指针
  let leftPoint = 0;
  let rightPoint = 0;

  // 用于记录最终结果子串的左右边界索引，初始设为一个不可能的范围
  let ansLeft = -1;
  let ansRight = s.length;

  // sMap 用于记录当前窗口内各字符出现的频率
  const sMap = new Map();

  // 3. 开始移动右指针（扩大窗口）
  while (rightPoint < s.length) {
    const rChar = s[rightPoint];
    const freq = sMap.get(rChar) ?? 0;
    sMap.set(rChar, freq + 1);

    // 4. 核心逻辑：如果当前窗口已经包含了 t 中的所有字符（满足覆盖条件）
    // 此时尝试通过移动左指针来“收缩窗口”，以寻找更短的合法子串
    while (isCovered(sMap, tMap)) {
      // 如果当前找到的窗口比之前记录的还要短，则更新最优解的边界
      if (rightPoint - leftPoint < ansRight - ansLeft) {
        ansLeft = leftPoint;
        ansRight = rightPoint;
      }

      // 5. 移动左指针，缩小窗口，并同步更新 sMap 中的计数
      const lChar = s[leftPoint];
      const freq = sMap.get(lChar);
      sMap.set(lChar, freq - 1);
      leftPoint += 1;
    }

    // 继续移动右指针
    rightPoint += 1;
  }
  // 如果 ansLeft 没被更新过，说明没有找到合法子串，返回空字符串
  return ansLeft == -1 ? '' : s.substring(ansLeft, ansRight + 1);
};

/**
 * 辅助函数：判断当前窗口 sMap 是否已经覆盖了 tMap 中的所有字符及其频率
 */
function isCovered(sMap, tMap) {
  for (const [key, value] of tMap) {
    // 如果窗口中某个字符的数量少于目标要求的数量，则未覆盖
    if (!sMap.get(key) || sMap.get(key) < value) {
      return false;
    }
  }

  return true;
}
// @lc code=end

/*
// @lcpr case=start
// "ADOBECODEBANC"\n"ABC"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"a"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"aa"\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = minWindow;
// @lcpr-after-debug-end
