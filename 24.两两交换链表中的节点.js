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
