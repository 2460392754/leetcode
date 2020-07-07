/*
 * @Author: Pocky
 * @Date: 2020-07-06 14:07:23
 * @LastEditTime: 2020-07-06 16:10:51
 * @URL: https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
 */

// ==========
// 1.双指针
// 执行用时：68 ms, 在所有 JavaScript 提交中击败了 81.63% 的用户
// 内存消耗：35.8 MB, 在所有 JavaScript 提交中击败了 10% 的用户
// ==========

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    const len = numbers.length;

    // 处理边界
    if (len < 2) return [];

    let left = 0;
    let right = len - 1;

    while (left < right) {
        const leftVal = numbers[left];
        const rightVal = numbers[right];

        if (leftVal + rightVal === target) {
            return [left + 1, right + 1];
        } else if (leftVal + rightVal < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
};

// ==========
// 2.哈希表
// 执行用时：72 ms, 在所有 JavaScript 提交中击败了 65.01% 的用户
// 内存消耗：36.2 MB, 在所有 JavaScript 提交中击败了 10% 的用户
// ==========

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    const len = numbers.length;

    // 处理边界
    if (len < 2) return [];

    let map = new Map();

    for (let i = 0; i < len; i++) {
        const n = numbers[i];

        map.set(n, i);
    }

    for (let i = 0; i < len; i++) {
        const n = numbers[i];
        const difference = target - n;

        if (map.has(difference)) {
            return [i + 1, map.get(difference) + 1];
        }
    }

    return [];
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    const len = numbers.length;

    // 处理边界
    if (len < 2) return [];

    for (let i = 0; i < len; i++) {
        let left = i + 1;
        let right = len;

        while (left < right) {}
    }
};
