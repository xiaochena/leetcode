/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * 模拟加法（带进位）
 * 核心思路: 同时遍历两个链表，逐位相加并处理进位，构建新链表存储结果，最后处理可能的最高位进位。
 * 时间复杂度: O(max(m, n))，空间复杂度: O(max(m, n))
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const ansList = new ListNode();
  let pAns = ansList;
  let p1 = l1;
  let p2 = l2;
  // 进位
  let carry = 0;

  while (p1 || p2) {
    // 两数相加
    let sum = (p1?.val || 0) + (p2?.val || 0) + carry;
    carry = 0;
    // 如果和大于0则
    if (sum >= 10) {
      carry = 1;
      sum = sum % 10;
    }
    pAns.val = sum;

    p1 = p1?.next || null;
    p2 = p2?.next || null;

    if (p1 || p2) {
      pAns.next = new ListNode();
      pAns = pAns.next;
    }
  }
  if (carry > 0) {
    pAns.next = new ListNode(1);
  }

  return ansList;
};
// @lc code=end

/*

// @lcpr case=start
// [9,9,9,9,9,9,9]\n[9,9,9,9]\n
// @lcpr case=end

 */

// @after-stub-for-debug-begin
module.exports = addTwoNumbers;
// @after-stub-for-debug-end
