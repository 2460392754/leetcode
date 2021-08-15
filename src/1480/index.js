/*
 * @Author: Pocky
 * @Date: 2020-07-08 10:14:31
 * @LastEditTime: 2020-07-08 10:29:58
 * @URL: https://leetcode-cn.com/problems/running-sum-of-1d-array/
 */

// ==========
// 1.遍历
// 时间复杂度：o(n)
// 空间复杂度：o(n)
// 执行用时：80 ms, 在所有 JavaScript 提交中击败了 36.81% 的用户
// 内存消耗：35.1 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
// ==========

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let tmp = 0;

    return nums.map((n) => {
        tmp += n;

        return tmp;
    });
};
