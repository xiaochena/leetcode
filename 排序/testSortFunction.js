function testSortFunction(sortFunc, options = {}) {
  const {
    numTests = 10, // 测试次数
    arraySize = 1000, // 每次测试的数组长度
    valueRange = [0, 10000], // 数值范围
  } = options;

  let allPassed = true;
  let totalTime = 0;

  for (let i = 0; i < numTests; i++) {
    // 生成随机数组
    const arr = Array.from(
      { length: arraySize },
      () =>
        Math.floor(Math.random() * (valueRange[1] - valueRange[0])) +
        valueRange[0]
    );

    // 复制一份用于校验
    const expected = [...arr].sort((a, b) => a - b);

    // 测试运行时间
    const start = performance.now();
    const result = sortFunc([...arr]); // 避免原地修改影响下次测试
    const end = performance.now();

    totalTime += end - start;

    // 验证结果
    const passed = JSON.stringify(result) === JSON.stringify(expected);

    console.log(
      `测试 #${i + 1}: ${passed ? "✅ 通过" : "❌ 失败"} (${(
        end - start
      ).toFixed(3)} ms)`
    );

    if (!passed) {
      allPassed = false;
      console.log("原数组:", arr.slice(0, 20), "...");
      console.log("期望结果:", expected.slice(0, 20), "...");
      console.log("实际结果:", result.slice(0, 20), "...");
      break;
    }
  }

  console.log("——————————————");
  if (allPassed) {
    console.log(`✅ 所有 ${numTests} 次测试通过！`);
  } else {
    console.log("❌ 有测试未通过！");
  }
  console.log(`平均耗时: ${(totalTime / numTests).toFixed(3)} ms`);
}

module.exports = testSortFunction;
