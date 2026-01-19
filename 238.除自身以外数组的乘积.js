/*
 * @lc app=leetcode.cn id=238 lang=javascript
 * @lcpr version=30204
 *
 * [238] 除自身以外数组的乘积
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 核心思路: 先从左到右计算每个位置左侧所有元素的乘积，再从右到左遍历时乘以右侧所有元素的乘积
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const ans = [1];

  for (let i = 1; i < nums.length; i++) {
    ans.push(ans[i - 1] * nums[i - 1]);
  }

  let temp = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] = ans[i] * temp;
    temp = temp * nums[i];
  }

  return ans;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [-1,1,0,-3,3]\n
// @lcpr case=end

 */

// 过程
// 第一遍：从左到右，计算每个位置左侧所有元素的乘积
// nums = [i1, i2, i3, i4]
{
  ans = [1]; // ans[0] = 1

  // i=1: ans[1] = ans[0] * nums[0] = 1 * i1
  ans = [1, i1];

  // i=2: ans[2] = ans[1] * nums[1] = i1 * i2
  ans = [1, i1, i1 * i2];

  // i=3: ans[3] = ans[2] * nums[2] = i1*i2 * i3
  ans = [1, i1, i1 * i2, i1 * i2 * i3];
}

// 第二遍：从右到左，乘以右侧所有元素的乘积
{
  ans = [1, i1, i1 * i2, i1 * i2 * i3];
  let temp = 1; // 右侧累积乘积

  // i=3: ans[3] = ans[3] * temp = (i1*i2*i3) * 1 = i1*i2*i3
  //      temp = temp * nums[3] = 1 * i4
  ans = [1, i1, i1 * i2, i1 * i2 * i3];
  temp = i4;

  // i=2: ans[2] = ans[2] * temp = (i1*i2) * i4 = i1*i2*i4
  //      temp = temp * nums[2] = i4 * i3
  ans = [1, i1, i1 * i2 * i4, i1 * i2 * i3];
  temp = i4 * i3;

  // i=1: ans[1] = ans[1] * temp = i1 * (i4*i3) = i1*i3*i4
  //      temp = temp * nums[1] = i4*i3 * i2
  ans = [1, i1 * i3 * i4, i1 * i2 * i4, i1 * i2 * i3];
  temp = i4 * i3 * i2;

  // i=0: ans[0] = ans[0] * temp = 1 * (i4*i3*i2) = i2*i3*i4
  //      temp = temp * nums[0] = i4*i3*i2 * i1
  ans = [i2 * i3 * i4, i1 * i3 * i4, i1 * i2 * i4, i1 * i2 * i3];
  temp = i4 * i3 * i2 * i1;
}
