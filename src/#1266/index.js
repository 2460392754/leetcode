/*
 * @Author: Pocky
 * @Date: 2020-07-08 11:13:57
 * @LastEditTime: 2020-07-08 15:26:16
 * @URL: https://leetcode-cn.com/problems/minimum-time-visiting-all-points/
 */

// ==========
// 1.遍历
// 执行用时：80 ms, 在所有 JavaScript 提交中击败了 34.54% 的用户
// 内存消耗：36.7 MB, 在所有 JavaScript 提交中击败了 33.33% 的用户
// ==========

/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
    let count = 0;

    for (let i = 0; i < points.length - 1; i++) {
        const x = Math.abs(points[i][0] - points[i + 1][0]);
        const y = Math.abs(points[i][1] - points[i + 1][1]);

        count += Math.max(x, y);
    }

    return count;
};
