/*
 * @Author: Pocky
 * @Date: 2020-07-03 09:12:32
 * @LastEditTime: 2020-07-03 10:04:24
 * @URL: https://leetcode-cn.com/problems/min-cost-climbing-stairs/
 */

// ==========
// 1.动态规划
// 执行用时：88 ms, 在所有 JavaScript 提交中击败了 22.74% 的用户
// 内存消耗：36.8 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
// ==========

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const len = cost.length;

    // 初始化数值
    const dp = new Array(len + 1).fill(0);

    // 填充固定爬楼梯所消耗的体力
    dp[0] = cost[0];
    dp[1] = cost[1];

    for (let i = 2; i <= len; i++) {
        // 获取 消耗最小所需的体力
        let val = Math.min(dp[i - 2], dp[i - 1]);

        // 登上楼层顶部时不需要花费额外的体力
        if (i !== len) {
            val += cost[i];
        }

        dp[i] = val;
    }

    return dp[len];
};

// ==========
// 2.遍历
// 执行用时：88 ms, 在所有 JavaScript 提交中击败了 22.74% 的用户
// 内存消耗：35.7 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
// ==========

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const len = cost.length;
    let prev = cost[0];
    let next = cost[1];

    for (let i = 2; i < len; i++) {
        let tmp = next;

        next = Math.min(prev, next) + cost[i];
        prev = tmp;
    }

    return Math.min(prev, next);
};
