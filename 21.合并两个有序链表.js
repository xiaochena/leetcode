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
 * 双指针迭代法（哑节点）
 * 核心思路: 使用哑节点作为结果链表的起点，双指针分别遍历两个链表，每次选择较小值节点接入结果链表，最后连接剩余部分。
 * 时间复杂度: O(m + n)，空间复杂度: O(1)
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
