/*
 * @lc app=leetcode.cn id=49 lang=javascript
 * @lcpr version=30204
 *
 * [49] 字母异位词分组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 *
 * 由于互为字母异位词的两个字符串包含的字母相同，
 * 因此对两个字符串分别进行排序之后得到的字符串一定是相同的，
 * 故可以将排序之后的字符串作为哈希表的键。
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams1 = function (strs) {
  const map = new Map();
  for (let str of strs) {
    let array = Array.from(str);
    array.sort();
    let key = array.toString();
    let list = map.get(key) ? map.get(key) : new Array();
    list.push(str);
    map.set(key, list);
  }
  return Array.from(map.values());
};

/**
 *
 * 由于互为字母异位词的两个字符串包含的字母相同，
 * 因此两个字符串中的相同字母出现的次数一定是相同的，
 * 故可以将每个字母出现的次数使用字符串表示，作为哈希表的键。
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Object();
  for (let s of strs) {
    const count = new Array(26).fill(0);
    for (let c of s) {
      count[c.charCodeAt() - 'a'.charCodeAt()]++;
    }
    map[count] ? map[count].push(s) : (map[count] = [s]);
  }
  return Object.values(map);
};
// @lc code=end

/*
// @lcpr case=start
// ["eat", "tea", "tan", "ate", "nat", "bat"]\n
// @lcpr case=end

// @lcpr case=start
// [""]\n
// @lcpr case=end

// @lcpr case=start
// ["a"]\n
// @lcpr case=end

 */

// @after-stub-for-debug-begin
module.exports = groupAnagrams;
// @after-stub-for-debug-end

// @after-stub-for-debug-begin
module.exports = groupAnagrams;
// @after-stub-for-debug-end
