/*
 * @lc app=leetcode.cn id=48 lang=javascript
 * @lcpr version=30204
 *
 * [48] 旋转图像
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 按层旋转（四位置交换法）
 * 核心思路: 按层从外到内处理，每层上边的每个元素依次与右、下、左三个对应位置交换，完成90度旋转。
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let rowTop = 0;
  let rowBottom = matrix.length - 1;
  let colLeft = 0;
  let colRight = matrix[0].length - 1;

  while (rowTop < rowBottom && colLeft < colRight) {
    for (let cl = colLeft; cl < colRight; cl++) {
      let offset = cl - colLeft;

      [matrix[rowTop][cl], matrix[rowTop + offset][colRight]] = [
        matrix[rowTop + offset][colRight],
        matrix[rowTop][cl],
      ];

      [matrix[rowTop][cl], matrix[rowBottom][colRight - offset]] = [
        matrix[rowBottom][colRight - offset],
        matrix[rowTop][cl],
      ];

      [matrix[rowTop][cl], matrix[rowBottom - offset][colLeft]] = [
        matrix[rowBottom - offset][colLeft],
        matrix[rowTop][cl],
      ];
    }

    rowTop += 1;
    rowBottom -= 1;
    colLeft += 1;
    colRight -= 1;
  }
};

// @lc code=end

/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3,4],[11,12,13,14],[21,22,23,24],[31,32,33,34]]\n
// @lcpr case=end

 */

// @after-stub-for-debug-begin
module.exports = rotate;
// @after-stub-for-debug-end
