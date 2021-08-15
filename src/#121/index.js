/*
 * @Author: Pocky
 * @Date: 2020-07-03 13:27:42
 * @LastEditTime: 2020-07-03 14:41:29
 * @URL: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 */

// ==========
// 1.动态规划
// 执行用时：1432 ms, 在所有 JavaScript 提交中击败了 5.08% 的用户
// 内存消耗：40.2 MB, 在所有 JavaScript 提交中击败了 8.00% 的用户
// ==========

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // 处理边界
    if (prices.length === 0) return 0;

    // 初始化并设置默认值
    const len = prices.length;
    const dp = new Array(len).fill(0);

    for (let i = 0; i < len; i++) {
        const buy = prices[i];

        // 当日购买后，比较之后的哪一天出售时利润最高
        const maxProfit = Math.max.apply(null, prices.slice(i + 1)) - buy;

        // 出售利润必须大于0
        if (maxProfit > 0) {
            dp[i] = maxProfit;
        }
    }

    // 获取最大利润
    return Math.max.apply(null, dp);
};

// ==========
// 2.动态规划 优化
// 执行用时：68 ms, 在所有 JavaScript 提交中击败了 92.73% 的用户
// 内存消耗：36.3 MB, 在所有 JavaScript 提交中击败了 16.00% 的用户
// ==========

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let last = 0;
    let max = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        last = Math.max(0, prices[i + 1] - prices[i] + last);
        max = Math.max(max, last);
    }

    return max;
};

// ==========
// 3.一次遍历法
// 执行用时：68 ms, 在所有 JavaScript 提交中击败了 92.73% 的用户
// 内存消耗：36.6 MB, 在所有 JavaScript 提交中击败了 16.00% 的用户
// ==========

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // 设置默认最小价格为无穷大
    let minPrice = Infinity;

    // 设置最大利润为0
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];
        const profit = price - minPrice;

        // 比较并设置最小价格
        if (price < minPrice) {
            minPrice = price;

            // 比较并设置最大利润
        } else if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
};
