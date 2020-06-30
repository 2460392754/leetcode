/*
 * @Author: Pocky
 * @Date: 2020-06-30 16:02:35
 * @LastEditTime: 2020-06-30 16:38:55
 * @URL: https://leetcode-cn.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
 */

// ==========
// 1.排序
// 执行用时：72 ms, 在所有 JavaScript 提交中击败了 41.67% 的用户
// 内存消耗：32.3 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
// ==========

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    // 排序，从小到大
    salary.sort((a, b) => a - b);

    // 浅拷贝并获取除去最小值和最大值
    const handleArr = salary.splice(1, salary.length - 2);

    // 数据平均值
    const average = handleArr.reduce((sum, val) => sum + val) / handleArr.length;

    return average;
};

// ==========
// 2.非排序
// 执行用时：64 ms, 在所有 JavaScript 提交中击败了 85.42% 的用户
// 内存消耗：32.2 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
// ==========

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    // 最小值，预设无穷大
    let min = Infinity;

    // 最大值，预设无穷小
    let max = -Infinity;

    // 数据总和
    let sum = 0;

    salary.forEach((n) => {
        sum += n;

        // 分别比较获取最小值和最大值
        min = Math.min(min, n);
        max = Math.max(max, n);
    });

    // 除去最小值和最大值后，再计算平均值
    return (sum - max - min) / (salary.length - 2);
};
