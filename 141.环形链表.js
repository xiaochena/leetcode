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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const set = new Set();

  let p1 = head;
  while (p1) {
    if (set.has(p1)) return true;
    set.add(p1);
    p1 = p1.next;
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
