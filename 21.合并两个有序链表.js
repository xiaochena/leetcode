/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
// @lc code=start
/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let p1 = list1;
  let p2 = list2;
  let result = new ListNode(-1);
  let pr = result;
  while (p1 && p2) {
    if (p1.val < p2.val) {
      pr.next = p1;
      p1 = p1.next;
    } else {
      pr.next = p2;
      p2 = p2.next;
    }
    pr = pr.next;
  }
  pr.next = p1 === null ? p2 : p1;
  return result.next;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = mergeTwoLists;
// @after-stub-for-debug-end
