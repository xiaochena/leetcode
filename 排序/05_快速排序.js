const testSortFunction = require("./testSortFunction");

// 非原地快速排序
(() => {
  function quickSort(arr) {
    // 递归终止条件）：当数组长度为 0 或 1 时，直接返回数组本身
    if (arr.length <= 1) {
      return arr;
    }
    // 选择基准（pivot），这里固定选择第一个元素作为基准,但是其实可以随便选
    const pivotIndex = 0;
    const left = []; // 用于存放比基准小的元素
    const right = []; // 用于存放比基准大的或等于的元素

    // 遍历数组，将元素根据大小分到左右两边
    for (let index = 0; index < arr.length; index++) {
      // 跳过基准元素本身
      if (index === pivotIndex) continue;
      const item = arr[index];
      // 比基准小的放入 left，否则放入 right
      if (item < arr[pivotIndex]) {
        left.push(item);
      } else {
        right.push(item);
      }
    }

    return [...quickSort(left), arr[pivotIndex], ...quickSort(right)];
  }

  console.log("—————————————— quickSort ——————————————");
  testSortFunction(quickSort, { numTests: 5, arraySize: 200 });
  console.log("—————————————— quickSort ——————————————");
})();

// 原地快速排序
(() => {
  // Lomuto 分区方案的快速排序
  function quickSortLomuto(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
      // 获取分区索引
      let pi = lomutoPartition(arr, low, high);
      // 递归排序左半部分
      quickSortLomuto(arr, low, pi - 1);
      // 递归排序右半部分
      quickSortLomuto(arr, pi + 1, high);
    }
    return arr;
  }

  function lomutoPartition(arr, low, high) {
    // 选择最右元素作为pivot
    let pivot = arr[high];
    // i指向比pivot小的元素的边界
    let i = low - 1;

    // 遍历数组，将小于pivot的元素放到左边
    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++;
        // 交换元素
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    // 将pivot放到正确位置
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }

  console.log("—————————————— quickSortLomuto ——————————————");
  testSortFunction(quickSortLomuto, { numTests: 5, arraySize: 5 });
  console.log("—————————————— quickSortLomuto ——————————————");

  // Hoare 分区方案的快速排序
  function quickSortHoare(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
      // 获取分区索引
      let pi = hoarePartition(arr, low, high);
      // 递归排序左半部分
      quickSortHoare(arr, low, pi);
      // 递归排序右半部分
      quickSortHoare(arr, pi + 1, high);
    }
    return arr;
  }

  function hoarePartition(arr, low, high) {
    // 选择最左元素作为pivot
    let pivot = arr[low];
    let i = low - 1;
    let j = high + 1;

    while (true) {
      // 从左向右找到第一个大于等于pivot的元素
      do {
        i++;
      } while (arr[i] < pivot);

      // 从右向左找到第一个小于等于pivot的元素
      do {
        j--;
      } while (arr[j] > pivot);

      // 如果指针交叉，返回右指针
      if (i >= j) return j;

      // 交换元素
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  console.log("—————————————— quickSortHoare ——————————————");
  testSortFunction(quickSortHoare, { numTests: 5, arraySize: 200 });
  console.log("—————————————— quickSortHoare ——————————————");
})();
