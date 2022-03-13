/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let p1 = head;
  let p2 = head;
  let index = 1;

  while (p2.next) {
    if (index > n) {
      p1 = p1.next;
    }
    p2 = p2.next;
    index++;
  }
  // 当 输入 [1,2] \n 2 ,删除的是开头节点时
  if (index === n) {
    return head.next;
  }

  // 正常情况当删除p1的下一个节点
  if (p1.next) {
    p1.next = p1.next.next;
  } else {
    // 没得删除的时候
    return null;
  }
  return head;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = removeNthFromEnd;
// @after-stub-for-debug-end
