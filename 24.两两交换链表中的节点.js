/*
 * @lc app=leetcode.cn id=24 lang=javascript
 * @lcpr version=30204
 *
 * [24] 两两交换链表中的节点
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

/**
 * @typedef {Object} ListNode
 * @property {number} val
 * @property {string} next
 */

/**
 * 迭代交换法（哑节点）
 * 核心思路: 使用哑节点简化边界处理，遍历链表时每次取出相邻两个节点进行指针重连交换，然后移动到下一对节点。
 * 时间复杂度: O(n)，空间复杂度: O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const dummyHead = new ListNode(0, head);

  let current = dummyHead;

  while (current.next && current.next.next) {
    let node1 = current.next;
    let node2 = current.next.next;

    current.next = node2;
    node1.next = node2.next;
    node2.next = node1;

    current = node1;
  }

  return dummyHead.next;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = swapPairs;
// @lcpr-after-debug-end
