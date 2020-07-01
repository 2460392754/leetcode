/*
 * @Author: Pocky
 * @Date: 2020-06-30 16:54:38
 * @LastEditTime: 2020-07-01 08:30:30
 * @URL: https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/
 */

// ==========
// 1.遍历
// 时间复杂度：o(n)
// 空间复杂度：o(1)
// 执行用时：76 ms, 在所有 JavaScript 提交中击败了 49.10% 的用户
// 内存消耗：35.4 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
// ==========

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    // 处理边界
    if (nums.length === 0) return 0;

    // 计数
    let count = 1;

    // 最大连续递增次数
    let max = 1;

    nums.forEach((n, i) => {
        // 跳过第一个数据
        if (i === 0) return true;

        // 后一个数大于前一个数
        if (n > nums[i - 1]) {
            // 计数自增，判断并保持最大计数值
            ++count > max && (max = count);
        } else {
            // 重置数据
            count = 1;
        }
    });

    return max;
};

// ==========
// 2.遍历
// 时间复杂度：o(n)
// 空间复杂度：o(1)
// 执行用时：84 ms, 在所有 JavaScript 提交中击败了 17.81% 的用户
// 内存消耗：35.6 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
// ==========

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    // 计数
    let count = 0;

    // 最大连续递增次数
    let max = 0;

    nums.forEach((n, i) => {
        // 跳过第一个数之后进行值的比较，
        if (i > 0 && nums[i - 1] >= n) {
            count = i;
        }

        // 获取最大值
        max = Math.max(max, i - count + 1);
    });

    return max;
};
