const testSortFunction = require("./testSortFunction");

(() => {
  function bubbleSort(arr) {
    // 外层循环：控制排序轮数
    for (let i = 0; i < arr.length - 1; i++) {
      // 内层循环：比较相邻元素
      for (let j = 0; j < arr.length - i - 1; j++) {
        // 如果前一个元素大于后一个，交换位置
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }

  testSortFunction(bubbleSort, { numTests: 5, arraySize: 200 });
})();

// 冒泡排序的核心思想是：通过反复遍历数组，比较相邻的两个元素，如果它们的顺序错误（例如，前一个大于后一个），则交换位置。

// 假设有一个无序数组：[5, 3, 8, 4, 2]
// 1.比较相邻的两个元素
//
// for (let j = 0; j < arr.length - 1; j++) {
//   if (arr[j] > arr[j + 1]) {
//     [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//   }
// }
//
// 循环过后 [5, 3, 8, 4, 2] => [5, 3, 4, 2, 8] 最大的 8 会 “冒泡” 到数组的末尾。

// 2.这个过程我们至多需要循环 arr.length-1 轮
// 1:[5, 3, 8, 4, 2] => [5, 3, 4, 2, 8] 最大的 8 会 “冒泡” 到数组的末尾。
// 2:[5, 3, 4, 2, 8] => [3, 4, 2, 5, 8] 最大的 5 会 “冒泡” 到数组的末尾。
// 3:[3, 4, 2, 5, 8] => [3, 2, 4, 5, 8] 最大的 4 会 “冒泡” 到数组的末尾。
// 4:[3, 2, 4, 5, 8] => [2, 3, 4, 5, 8] 最大的 3 会 “冒泡” 到数组的末尾。
//
// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//     }
//   }
// }
//

// 3.我们可以发现，每轮后已排序的部分不需要再比较。内层循环的范围逐渐缩小。
// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//     }
//   }
// }
