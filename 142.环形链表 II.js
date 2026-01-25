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
 * 哈希集合法
 * 核心思路: 用哈希集合记录已访问的节点，遍历链表时第一个重复出现的节点就是环的入口。
 * 时间复杂度: O(n)，空间复杂度: O(n)
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
