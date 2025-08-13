/*
 * @lc app=leetcode.cn id=58 lang=javascript
 * @lcpr version=30204
 *
 * [58] 最后一个单词的长度
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s.split(" ").filter(Boolean).pop()?.length;
};
// @lc code=end

/*
// @lcpr case=start
// "Hello World"\n
// @lcpr case=end

// @lcpr case=start
// "   fly me   to   the moon  "\n
// @lcpr case=end

// @lcpr case=start
// "luffy is still joyboy"\n
// @lcpr case=end

 */

// @after-stub-for-debug-begin
module.exports = lengthOfLastWord;
// @after-stub-for-debug-end
