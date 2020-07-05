/*
 * @Author: Pocky
 * @Date: 2020-07-05 21:51:24
 * @LastEditTime: 2020-07-05 22:09:18
 * @URL: https://leetcode-cn.com/problems/largest-perimeter-triangle/
 */

// ==========
// 1.排序+遍历
// 时间复杂度：o(n)
// 空间复杂度：o(n)
// 执行用时：104 ms, 在所有 JavaScript 提交中击败了 90.64% 的用户
// 内存消耗：38.3 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
// ==========

/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function (A) {
    // 处理边界
    if (A.length < 3) return 0;

    // 排序，从大到小
    const newA = A.sort((a, b) => b - a);

    // 三角形的第三边 (最大边长)
    let max = newA[0];

    for (let i = 1; i < newA.length; i++) {
        // 三角行的 第一边长和第二边长
        const first = newA[i];
        const second = newA[i + 1];

        // 三角形的两边之和 必须 大于第三边
        if (first + second > max) {
            return first + second + max;
        } else {
            // 重置最大边长
            max = first;
        }
    }

    // 处理边界
    return 0;
};
