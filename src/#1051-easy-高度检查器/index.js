/*
 * @Author: Pocky
 * @Date: 2020-06-30 14:27:26
 * @LastEditTime: 2020-06-30 16:53:10
 * @URL: https://leetcode-cn.com/problems/height-checker/
 */

// ==========
// 1.遍历查重
// 时间复杂度：o(n^2)
// 空间复杂度：o(1)
// 执行用时：68 ms, 在所有 JavaScript 提交中击败了 87.65% 的用户
// 内存消耗：34.9 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
// ==========

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    // 浅拷贝数组
    const tempArr = heights.concat();

    // 计数
    let count = 0;

    // 排序， 从小到大
    tempArr.sort((a, b) => a - b);

    // 对比排序前后的数据差异数量
    tempArr.forEach((n, i) => {
        if (n !== heights[i]) {
            count++;
        }
    });

    return count;
};
