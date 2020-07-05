/*
 * @Author: Pocky
 * @Date: 2020-07-05 22:14:11
 * @LastEditTime: 2020-07-05 22:53:21
 * @URL: https://leetcode-cn.com/problems/day-of-the-year/
 */

// ==========
// 1.时间戳
// 时间复杂度：o(1)
// 空间复杂度：o(1)
// 执行用时：84 ms, 在所有 JavaScript 提交中击败了 16.67% 的用户
// 内存消耗：33.4 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
// ==========

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const timestamp = d.getTime();
    const redirectTimestamp = timestamp - new Date(`${year}-01-01`).getTime();
    const ans = redirectTimestamp / 1000 / 86400 + 1;

    return ans;
};

// ==========
// 2.暴力法
// 时间复杂度：o(1)
// 空间复杂度：o(1)
// 执行用时：72 ms, 在所有 JavaScript 提交中击败了 57.02% 的用户
// 内存消耗：33.4 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
// ==========

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
    const d = new Date(date);

    // 获取 年月日
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();

    // 非闰年每月天数 列表
    const list = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // 天数
    let count = day;

    for (let i = 1; i <= month; i++) {
        if (i === 2 && year % 4 === 0 && year % 100 !== 0) {
            count++;
        }

        count += list[i - 1];
    }

    return count;
};
