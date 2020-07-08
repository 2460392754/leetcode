/*
 * @Author: Pocky
 * @Date: 2020-07-08 10:32:49
 * @LastEditTime: 2020-07-08 10:41:51
 * @URL: https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies/
 */

// ==========
// 1.遍历
// 执行用时：72 ms, 在所有 JavaScript 提交中击败了 71.11% 的用户
// 内存消耗：33.1 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
// ==========

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    // 处理边界
    if (candies.length === 1) return [true];

    // 最多糖果的数量
    const max = Math.max.apply(null, candies);

    return candies.map((n) => {
        // 原本拥有最多糖果的孩子
        if (n === max) {
            return true;
        }

        // 孩子当前拥有的糖果加上额外分配之后的糖果数量总和不小于原本最多数量
        return n + extraCandies >= max;
    });
};
