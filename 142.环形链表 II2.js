/*
 * @lc app=leetcode.cn id=142 lang=javascript
 * @lcpr version=30204
 *
 * [142] 环形链表 II
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
 * @property {ListNode} next
 */

/**
 * 快慢指针法（Floyd 判圈算法 + 入口点查找）
 * 核心思路: 快慢指针相遇后，将一个指针移回头节点，两指针以相同速度前进，再次相遇点即为环的入口。
 *
 * 时间复杂度: O(n)，空间复杂度: O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      let pointer = head;
      while (pointer !== slow) {
        pointer = pointer.next;
        slow = slow.next;
      }
      return pointer;
    }
  }

  return null;
};
// @lc code=end

/*
// @lcpr case=start
// [3,2,0,-4]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [1]\n-1\n
// @lcpr case=end

 */
