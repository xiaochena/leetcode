/*
 * @lc app=leetcode.cn id=2806 lang=javascript
 * @lcpr version=30203
 *
 * [2806] 取整购买后的账户余额
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function (purchaseAmount) {
  const ones = purchaseAmount % 10;
  if (ones < 5) {
    purchaseAmount -= ones;
  } else {
    purchaseAmount += 10 - ones;
  }
  return 100 - purchaseAmount;
};
// @lc code=end

/*
// @lcpr case=start
// 9\n
// @lcpr case=end

// @lcpr case=start
// 15\n
// @lcpr case=end

 */
