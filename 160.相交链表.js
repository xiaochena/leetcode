/*
 * @lc app=leetcode.cn id=160 lang=javascript
 * @lcpr version=30204
 *
 * [160] 相交链表
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @typedef {Object} ListNode
 * @property {number} val
 * @property {ListNode | null} next
 */

/**
 * 哈希集合
 * 核心思路: 用哈希集合存储链表A的所有节点，然后遍历链表B，第一个在集合中的节点就是相交节点。
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const hashMap = new Set();
  let nodeA = headA;

  while (nodeA) {
    hashMap.add(nodeA);
    nodeA = nodeA.next;
  }

  let nodeB = headB;
  while (nodeB) {
    if (hashMap.has(nodeB)) {
      return nodeB;
    }
    nodeB = nodeB.next;
  }

  return null;
};
// @lc code=end

/*
// @lcpr case=start
// 8\n[4,1,8,4,5]\n[5,6,1,8,4,5]\n2\n3\n
// @lcpr case=end

// @lcpr case=start
// 2\n[1,9,1,2,4]\n[3,2,4]\n3\n1\n
// @lcpr case=end

// @lcpr case=start
// 0\n[2,6,4]\n[1,5]\n3\n2\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = getIntersectionNode;
// @lcpr-after-debug-end
