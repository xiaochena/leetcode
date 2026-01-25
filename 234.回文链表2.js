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
 * 链表的中间结点
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

/**
 * 反转链表
 * @param {ListNode} head
 * @returns {ListNode}
 *
 */
function reverseList(head) {
  let previous = null;
  let current = head;

  while (current) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}

/**
 * 快慢指针 + 反转后半部分
 * 核心思路: 用快慢指针找到链表中点，反转后半部分链表，然后双指针从头和反转后的中点同时遍历比较，判断是否回文。
 * 时间复杂度: O(n)，空间复杂度: O(1)
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head == null) return true;
  // 找到链表的中间结点
  const midHead = middleNode(head);

  // 反转包括中间结点的后半部分链表
  const reverseHead = reverseList(midHead);

  // 判断是否回文
  let p1 = head;
  let p2 = reverseHead;
  let ans = true;
  while (p2) {
    if (p1.val !== p2.val) {
      ans = false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }

  // 还原链表并返回结果
  midHead.next = reverseList(reverseHead);
  return ans;
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

// (1,  2,  3,  2,  1);
//        slow
//                 fast

// (1,  2,  2,  1);
//         slow
//                 fast
