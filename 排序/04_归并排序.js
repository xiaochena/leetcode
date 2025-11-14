const testSortFunction = require("./testSortFunction");

(() => {
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr; // 基线条件
    }

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid)); // 递归分解左半
    let right = mergeSort(arr.slice(mid)); // 递归分解右半

    return merge(left, right); // 合并
  }

  // 合并两个已排序数组的辅助函数
  function merge(left, right) {
    let result = [];
    let i = 0,
      j = 0;

    // 比较并合并
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }

    // 剩余元素直接追加
    while (i < left.length) {
      result.push(left[i++]);
    }
    while (j < right.length) {
      result.push(right[j++]);
    }

    return result;
  }

  testSortFunction(mergeSort, { numTests: 5, arraySize: 20 });
})();

// 归并排序的核心思想分为三个步骤：
// 分解（Divide）：将数组递归分成两个大致相等的子数组，直到子数组长度为1。
// 解决（Conquer）：递归对子数组进行排序
// 合并（Merge）：将两个已排序的子数组合并成一个有序数组。通过比较两个子数组的元素，逐一选取较小者放入结果数组。

// 假设有一个无序数组：[38, 27, 43, 3, 9, 82, 10]，排序过程如下（递归树示意）：

// 分解阶段：
// 原数组：[38, 27, 43, 3, 9, 82, 10]
// 分成左：[38, 27, 43] 和 右：[3, 9, 82, 10]
// 继续分解左： [38] 和 [27, 43] → [27] 和 [43]
// 继续分解右： [3, 9] 和 [82, 10] → [3] 和 [9]；[82] 和 [10]

// 合并阶段（自底向上）：
// 合并 [27] 和 [43] → [27, 43]
// 合并 [38] 和 [27, 43] → [27, 38, 43]（比较：27<38→27；38<43→38,43）
// 合并 [3] 和 [9] → [3, 9]
// 合并 [82] 和 [10] → [10, 82]
// 合并 [3, 9] 和 [10, 82] → [3, 9, 10, 82]（比较：3<9<10<82）
// 最终合并 [27, 38, 43] 和 [3, 9, 10, 82] → [3, 9, 10, 27, 38, 43, 82]
