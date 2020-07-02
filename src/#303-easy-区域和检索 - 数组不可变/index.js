/*
 * @Author: Pocky
 * @Date: 2020-07-02 15:18:52
 * @LastEditTime: 2020-07-02 16:08:52
 * @URL: https://leetcode-cn.com/problems/range-sum-query-immutable/
 */

// ==========
// 1.双指针遍历
// 时间复杂度：o(n)
// 空间复杂度：o(1)
// 执行用时：248 ms, 在所有 JavaScript 提交中击败了 5.10% 的用户
// 内存消耗：45 MB, 在所有 JavaScript 提交中击败了 28.57% 的用户
// ==========

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.data = nums;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    // 分割数组
    const arr = this.data.slice(i, j + 1);

    // 初始化双指针下标值
    let left = 0;
    let right = arr.length - 1;
    let sum = 0;

    while (left < right) {
        sum += arr[left] + arr[right];

        left++;
        right--;
    }

    // 处理中间值
    arr.length % 2 !== 0 && (sum += arr[parseInt(arr.length / 2)]);

    return sum;
};

// ==========
// 2.动态规范
// 时间复杂度：o(n)
// 空间复杂度：o(1)
// 执行用时：120 ms, 在所有 JavaScript 提交中击败了 67.14% 的用户
// 内存消耗：42 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
// ==========

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    let sum = 0;

    this.data = nums.map((n) => {
        sum += n;

        return sum;
    });
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    if (i === 0) {
        return this.data[j];
    }

    return this.data[j] - this.data[i - 1];
};
