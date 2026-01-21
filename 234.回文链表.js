/*
 * @lc app=leetcode.cn id=234 lang=javascript
 * @lcpr version=30204
 *
 * [234] 回文链表
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
 * @property {ListNode | null} next
 */

/**
 * 将值复制到数组中后用双指针法
 * 复杂度：时间O(n)，O(n)
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const vals = [];

  while (head) {
    vals.push(head);
    head = head.next;
  }

  let left = 0;
  let right = vals.length - 1;

  while (left <= right) {
    if (vals[left].val !== vals[right].val) {
      return false;
    }
    left += 1;
    right -= 1;
  }

  return true;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = isPalindrome;
// @lcpr-after-debug-end
