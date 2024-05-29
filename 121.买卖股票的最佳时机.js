/**
 * @description
 * - 如果 p2 的 价格小于 p1 的价格，我们将 p1 价格更新为 p2 价格。
 * (因为 p1 价格小于 p2 的价格时，意味着 p2 的价格有可能是一个更好的购买价格，因为它比之前记录的 p1 价格更低)
 * - 否则，我们计算 p2 与 p1 的差值，如果这个差值大于最大利润，则更新最大利润。
 */

/*
 * @lc app=leetcode.cn id=121 lang=javascript
 * @lcpr version=30202
 *
 * [121] 买卖股票的最佳时机
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let p1 = 0;
  let p2 = 1;

  while (p2 < prices.length) {
    const diff = prices[p2] - prices[p1];

    if (diff > max) {
      max = diff;
    }

    if (diff < 0) {
      p1 = p2;
    }
    p2 += 1;
  }
  return max;
};
// @lc code=end

/*
// @lcpr case=start
// [7,1,5,3,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [7,6,4,3,1]\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = maxProfit;
// @lcpr-after-debug-end
