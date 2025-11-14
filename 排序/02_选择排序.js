const testSortFunction = require("./testSortFunction");

(() => {
  function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      // 寻找数组中最小的元素
      let selectIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[selectIndex] > arr[j]) {
          selectIndex = j;
        }
      }
      // 将其与未排序区间的第一个元素交换
      [arr[selectIndex], arr[i]] = [arr[i], arr[selectIndex]];
    }
    return arr;
  }

  testSortFunction(selectSort, { numTests: 5, arraySize: 200 });
})();

// 选择排序的核心思想是：
// 将数组分为已排序区间（初始为空）和未排序区间（初始为整个数组）。
// 每次从未排序区间中挑选出最小元素，并将其与未排序区间的第一个元素交换

// 假设有一个无序数组：[5, 3, 8, 4, 2]
// 1. 未排序区间的第一个元素下标 0 开始，寻找数组中最小的元素
//
// let i = 0;
// let selectIndex = i;
// for (let j = i + 1; j < arr.length; j++) {
//   if (arr[selectIndex] > arr[j]) {
//     selectIndex = j;
//   }
// }

// 2.将其与未排序区间的第一个元素交换
// [arr[selectIndex], arr[i]] = [arr[i], arr[selectIndex]];
//
// 循环过后 [5, 3, 8, 4, 2] => [2, 3, 8, 4, 5] 最小的 2 会和未排序区间的第一个元素(下标位 0 的元素)交换

// 3.重复以上过程，每次未排序区间的第一个元素下标为上一个下标 +1
//
// for (let i = 0; i < arr.length; i++) {
//   let selectIndex = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[selectIndex] > arr[j]) {
//       selectIndex = j;
//     }
//   }

//   [arr[selectIndex], arr[i]] = [arr[i], arr[selectIndex]];
// }
// return arr;
