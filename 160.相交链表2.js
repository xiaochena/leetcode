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
 * 浪漫相遇法（双指针）
 * 核心思路: 两个指针分别从两个链表头开始遍历，到达末尾时切换到另一个链表头继续遍历，最终会在相交节点相遇（若存在），或同时到达 null（若不存在）。
 * 假设：
 * - 链表 A 独有的长度为 a
 * - 链表 B 独有的长度为 b
 * - 相交的公共部分长度为 c
 * 那么:
 * - 链表 A 的总长度为 a + c
 * - 链表 B 的总长度为 b + c
 *
 * 那么：
 * 如果指针 pA 走完 A 后去走 B，它走过的路程是：(a + c) + b
 * 如果指针 pB 走完 B 后去走 A，它走过的路程是：(b + c) + a
 *
 * 发现：(a + c) + b === (b + c) + a
 * 意味着，当两个指针都走完这合并的路程时，它们一定会同时到达交点！
 *
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode | null}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let pA = headA;
  let pB = headB;

  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }

  return pA;
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
