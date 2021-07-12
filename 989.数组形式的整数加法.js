/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let isCarry = false; /** 是否进位 */
  const length = k.toString().length;
  for (let i = 0; num.length > i; i++) {
    const digits = Math.pow(10, i + 1); /** 位数10、100、1000 */
    let digitsNum = k % digits; /** 取位数上的值 */
    
  }
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = addToArrayForm;
// @after-stub-for-debug-end
