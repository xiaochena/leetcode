/*
 * @lc app=leetcode.cn id=19 lang=javascript
 * @lcpr version=30204
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * 双指针（快慢指针间隔法）
 * 核心思路: 使用两个指针，让快指针先走 n 步，然后快慢指针同时前进，当快指针到达末尾时，慢指针的下一个节点就是要删除的节点。
 * 时间复杂度: O(L)，空间复杂度: O(1)
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let p1 = head;
  let p2 = head;
  let index = 1;

  while (p2.next) {
    if (index > n) {
      p1 = p1.next;
    }
    p2 = p2.next;
    index++;
  }
  // 当 输入 [1,2] \n 2 ,删除的是开头节点时
  if (index === n) {
    return head.next;
  }

  // 正常情况当删除p1的下一个节点
  if (p1.next) {
    p1.next = p1.next.next;
  } else {
    // 没得删除的时候
    return null;
  }
  return head;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n
// @lcpr case=end

 */
