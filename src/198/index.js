/*
 * @Author: Pocky
 * @Date: 2020-07-03 10:21:07
 * @LastEditTime: 2020-07-03 13:21:55
 * @URL: https://leetcode-cn.com/problems/house-robber/
 */

// ==========
// 1.动态规划
// 执行用时：68 ms, 在所有 JavaScript 提交中击败了 67.69% 的用户
// 内存消耗：32.4 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
// ==========

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    // 处理边界
    if (nums.length === 0) return 0;

    // 初始化
    const len = nums.length;
    const dp = new Array(len);

    // 添加默认值
    dp[0] = nums[0];
    dp[1] = nums[1];

    // 处理边界
    if (len === 1) {
        return dp[0];
    }

    for (let i = 2; i < len; i++) {
        // 从前1位或前2位中获取最大值
        dp[i] = Math.max(dp[i - 2], dp[i - 3] || 0) + nums[i];
    }

    // 获取数据叠加后的最大值
    return Math.max(dp[len - 1], dp[len - 2]);
};

// ==========
// 2.动态规划
// 执行用时：72 ms, 在所有 JavaScript 提交中击败了 45.55% 的用户
// 内存消耗：32.6 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
// ==========

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    // 处理边界
    if (nums.length === 0) return 0;

    let prev = 0;
    let cur = 0;

    for (let i = 0; i < nums.length; i++) {
        const temp = Math.max(cur, prev + nums[i]);

        prev = cur;
        cur = temp;
    }

    return cur;
};
