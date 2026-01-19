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
 * 方案二：
 * 优化：用 debtCounter 替代 isCovered() 函数重复遍历来判断是否满足覆盖条件
 * 核心逻辑：如果当前窗口已经包含了 t 中的所有字符（满足覆盖条件）
 * 此时尝试通过移动左指针来“收缩窗口”，以寻找更短的合法子串
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // 1. 用 tMap 存储每个字符的"债务"，正数表示还需要多少个该字符
  const tMap = new Map();
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    const debt = tMap.get(char) ?? 0;
    tMap.set(char, debt + 1);
  }

  // 2. 初始化滑动窗口的左右指针
  let leftPoint = 0;
  let rightPoint = 0;

  // 用于记录最终结果子串的左右边界索引，初始设为一个不可能的范围
  let ansLeft = -1;
  let ansRight = s.length;

  // 【关键优化】debtCounter 记录还需要匹配的字符总数
  // 当 debtCounter 为 0 时，说明当前窗口已经包含了 t 的所有字符
  let debtCounter = t.length;

  // 3. 开始移动右指针（扩大窗口）
  while (rightPoint < s.length) {
    const rChar = s[rightPoint];
    const debt = tMap.get(rChar) || 0;

    // 【核心逻辑1】如果当前字符是我们需要的（debt > 0），则减少待匹配数量
    // debt > 0 意味着这个字符在 t 中存在且当前窗口中该字符数量还不够
    if (debt > 0) {
      debtCounter -= 1;
    }

    // 更新 tMap：将该字符的"债务"减1
    // 如果 debt 变为负数，说明窗口中该字符已经超过了 t 中的需求量
    tMap.set(rChar, debt - 1);

    // 4. 【关键判断】当 debtCounter === 0 时，说明找到了一个合法窗口
    // 此时开始尝试收缩左边界，寻找最小窗口
    while (debtCounter === 0) {
      // 如果当前窗口比之前记录的更短，则更新最优解
      if (rightPoint - leftPoint < ansRight - ansLeft) {
        ansLeft = leftPoint;
        ansRight = rightPoint;
      }

      // 5. 移动左指针，准备缩小窗口
      const lChar = s[leftPoint];
      const debt = tMap.get(lChar);

      // 【核心逻辑2】如果左边界的字符在 tMap 中的债务为 0
      // 说明移除这个字符后，窗口将不再满足覆盖条件
      if (debt === 0) {
        debtCounter += 1;
      }

      // 将左边界字符的"债务"加1（因为要从窗口中移除它）
      tMap.set(lChar, debt + 1);
      leftPoint += 1;
    }

    // 继续移动右指针
    rightPoint += 1;
  }

  // 如果 ansLeft 没被更新过，说明没有找到合法子串，返回空字符串
  return ansLeft == -1 ? '' : s.substring(ansLeft, ansRight + 1);
};

// @lc code=end

/*
// @lcpr case=start
// "AADOBECODEBANC"\n"ABC"\n
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

/*
【教学要点 - 优化版本的核心思想】

这个版本相比基础版本的主要优化：

1. **用 debtCounter 替代 isCovered 函数**：
   - 基础版本：每次都要遍历整个 tMap 来检查是否满足覆盖条件，时间复杂度 O(|t|)
   - 优化版本：用一个整数 debtCounter 来追踪还需要匹配的字符数量，检查时间复杂度 O(1)

2. **tMap 的巧妙用法**：
   - 正数：表示还需要该字符的数量（"债务"）
   - 0：表示该字符刚好满足需求
   - 负数：表示该字符已经超过需求（"盈余"）

3. **关键判断逻辑**：
   - 右指针移动时：如果 debt > 0，说明这个字符是有用的，debtCounter--
   - 左指针移动时：如果 debt === 0，说明移除这个字符会破坏覆盖条件，debtCounter++

4. **为什么这样更高效**：
   - 避免了每次都遍历 Map 的开销
   - 整体时间复杂度从 O(|s| × |t|) 优化到 O(|s| + |t|)
   - 在处理长字符串时性能提升明显

5. **算法精髓**：
   - 通过维护一个"债务计数器"(debtCounter)，将复杂的集合比较操作转化为简单的数值比较
   - 这是滑动窗口算法中常用的优化技巧
*/
