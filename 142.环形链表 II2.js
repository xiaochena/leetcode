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
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let p = head;
  let set = new Set();

  while (p) {
    if (set.has(p)) {
      return true;
    }
    set.add(p);
    p = p.next;
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
