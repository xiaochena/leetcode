/*
 * @lc app=leetcode.cn id=54 lang=javascript
 * @lcpr version=30204
 *
 * [54] 螺旋矩阵
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 模拟法（边遍历边检查）
 * 核心思路: 按上→右→下→左顺序遍历每条边，每遍历完一条边就收缩对应边界并检查是否越界，越界则结束。
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const ans = [];

  let rowTop = 0;
  let rowBottom = matrix.length - 1;
  let colLeft = 0;
  let colRight = matrix[0].length - 1;

  while (true) {
    // 1. 上边：从左到右
    for (let cl = colLeft; cl <= colRight; cl++) {
      ans.push(matrix[rowTop][cl]);
    }
    rowTop++; // 上边界下移
    if (rowTop > rowBottom) break; // 检查是否越界

    // 2. 右边：从上到下
    for (let rt = rowTop; rt <= rowBottom; rt++) {
      ans.push(matrix[rt][colRight]);
    }
    colRight--; // 右边界左移
    if (colLeft > colRight) break;

    // 3. 下边：从右到左
    for (let cr = colRight; cr >= colLeft; cr--) {
      ans.push(matrix[rowBottom][cr]);
    }
    rowBottom--; // 下边界上移
    if (rowTop > rowBottom) break;

    // 4. 左边：从下到上
    for (let rb = rowBottom; rb >= rowTop; rb--) {
      ans.push(matrix[rb][colLeft]);
    }
    colLeft++; // 左边界右移
    if (colLeft > colRight) break;
  }

  return ans;
};
// @lc code=end

/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = spiralOrder;
// @lcpr-after-debug-end
