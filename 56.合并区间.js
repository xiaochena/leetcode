/*
 * @lc app=leetcode.cn id=56 lang=javascript
 * @lcpr version=30204
 *
 * [56] 合并区间
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length <= 1) return intervals;

  // 1. 按照区间起点进行升序排序
  intervals.sort((a, b) => a[0] - b[0]);

  const ansArr = [intervals[0]];

  for (let i = 0; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = ansArr[ansArr.length - 1];

    // 2. 如果当前区间的起点 <= 上一个合并区间的终点，说明有重叠
    if (current[0] <= lastMerged[1]) {
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // 3. 没有重叠，直接作为新区间加入结果集
      ansArr.push(current);
    }
  }

  return ansArr;
};

// @lc code=end

/*
// @lcpr case=start
// [[1,3],[2,6],[8,10],[15,18]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,4],[4,5]]\n
// @lcpr case=end

// @lcpr case=start
// [[4,7],[1,4]]\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = merge;
// @lcpr-after-debug-end
