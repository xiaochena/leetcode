/*
 * @lc app=leetcode.cn id=141 lang=javascript
 * @lcpr version=30204
 *
 * [141] 环形链表
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

/**
 * @typedef {Object} ListNode
 * @property {number} val
 * @property {ListNode | null} next
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 快慢指针法（Floyd 判圈算法）
 * 核心思路: 用快慢指针同时遍历链表（快指针每次走2步，慢指针每次走1步），若有环则两指针必定相遇。
 * 时间复杂度: O(n)，空间复杂度: O(1)
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
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

// @lcpr-after-debug-begin
module.exports = hasCycle;
// @lcpr-after-debug-end
