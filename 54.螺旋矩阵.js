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
 * 边界收缩法
 * 核心思路: 用四个边界变量控制范围，按上→右→下→左顺序遍历每一圈，每圈结束后收缩边界，最后单独处理剩余的单行或单列。
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const ans = [];

  let rowTop = 0;
  let rowBottom = matrix.length - 1;
  let colLeft = 0;
  let colRight = matrix[0]?.length - 1;

  while (rowTop < rowBottom && colLeft < colRight) {
    for (let cl = colLeft; cl < colRight; cl++) {
      ans.push(matrix[rowTop][cl]);
    }

    for (let rt = rowTop; rt < rowBottom; rt++) {
      ans.push(matrix[rt][colRight]);
    }

    for (let cr = colRight; cr > colLeft; cr--) {
      ans.push(matrix[rowBottom][cr]);
    }

    for (let rb = rowBottom; rb > rowTop; rb--) {
      ans.push(matrix[rb][colLeft]);
    }

    rowTop += 1;
    rowBottom -= 1;
    colLeft += 1;
    colRight -= 1;
  }

  // 2. 处理剩余的单行或单列
  if (rowTop === rowBottom) {
    // 剩下一行：从左到右
    for (let i = colLeft; i <= colRight; i++) ans.push(matrix[rowTop][i]);
  } else if (colLeft === colRight) {
    // 剩下一列：从上到下
    for (let i = rowTop; i <= rowBottom; i++) ans.push(matrix[i][colLeft]);
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
