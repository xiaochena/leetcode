/*
 * @lc app=leetcode.cn id=11 lang=javascript
 * @lcpr version=30204
 *
 * [11] 盛最多水的容器
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 官方写法
 * 思路：
 *
 * 利用双指针从最大宽度开始向内收缩，通过移动较短的那条线，不断更新最大水量
 * 时间复杂度 O(n)。
 *
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let result = 0;
  let left = 0;
  let right = height.length - 1;

  while (right > left) {
    const h = Math.min(height[left], height[right]);
    const w = right - left;
    result = Math.max(result, h * w);

    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return result;
};
// @lc code=end

/**
 * 我的写法
 * 思路：
 * 超时了、但是逻辑上是对的
 * 暴力枚举所有的两条线，把能形成的容器容量都算一遍，取最大值。
 * 时间复杂度 O(n²)。
 *
 * @param {number[]} height
 * @return {number}
 */
var maxArea_1 = function (height) {
  let result = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const h = Math.min(height[i], height[j]);
      const w = j - i;
      const area = h * w;
      result = Math.max(area, maxArea);
    }
  }

  return result;
};

/*
// @lcpr case=start
// [1,8,6,2,5,4,8,3,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,1]\n
// @lcpr case=end

 */
