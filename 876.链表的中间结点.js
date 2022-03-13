/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let one = head;
  let two = head;

  while (two.next && two.next.next) {
    one = one.next;
    two = two.next.next;
  }
  if (two.next) {
    one = one.next;
  }
  return one;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = middleNode;
// @after-stub-for-debug-end
