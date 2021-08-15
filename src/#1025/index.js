/*
 * @Author: Pocky
 * @Date: 2020-07-02 16:16:13
 * @LastEditTime: 2020-07-03 08:59:16
 * @URL: https://leetcode-cn.com/problems/divisor-game/
 */

// ==========
// 1.归纳法
// 时间复杂度：o(1)
// 空间复杂度：o(1)
// 执行用时：72 ms, 在所有 JavaScript 提交中击败了 47.86% 的用户
// 内存消耗：32.2 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
// ==========

/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
    return N % 2 === 0;
};

// ==========
// 2.动态规划
// 时间复杂度：o(1)
// 空间复杂度：o(1)
// 执行用时：88 ms, 在所有 JavaScript 提交中击败了 13.90% 的用户
// 内存消耗：35.5 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
// ==========

/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
    const dp = new Array(N + 1);

    dp[1] = false;
    dp[2] = true;

    if (N <= 2) {
        return dp[N];
    }

    for (let i = 3; i <= N; i++) {
        dp[i] = false;

        for (let j = 1; j < i; j++) {
            if (i % j === 0 && !dp[i - j]) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[N];
};
