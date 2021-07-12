/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode();
  let resultPointerL1 = result; // 结果的指针
  let pointerL1 = l1;
  let pointerL2 = l2;
  let carry = 0; // 进位
  do {
    let sum =
      (pointerL1 ? pointerL1.val : 0) + (pointerL2 ? pointerL2.val : 0) + carry;
    resultPointerL1.val = sum % 10;
    carry = sum >= 10 ? 1 : 0;
    if (pointerL1 || pointerL2) {
      if (pointerL1?.next || pointerL2?.next) {
        resultPointerL1.next = new ListNode();
        resultPointerL1 = resultPointerL1.next;
      }
      pointerL1 = pointerL1 ? pointerL1.next : null;
      pointerL2 = pointerL2 ? pointerL2.next : null;
    }
  } while (pointerL1 || pointerL2);
  if (carry > 0) {
    resultPointerL1.next = new ListNode(1);
  }

  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = addTwoNumbers;
// @after-stub-for-debug-end
