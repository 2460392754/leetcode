/*
 * @Author: Pocky
 * @Date: 2020-07-01 14:19:46
 * @LastEditTime: 2020-07-01 15:25:28
 * @URL: https://leetcode-cn.com/problems/replace-elements-with-greatest-element-on-right-side/
 */

// ==========
// 1.排序
// 执行用时：928 ms, 在所有 JavaScript 提交中击败了 8.19% 的用户
// 内存消耗：43.5 MB, 在所有 JavaScript 提交中击败了 33.33% 的用户
// ==========

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    return arr.map((n, i) => {
        // 处理数组的最后一个元素
        if (i === arr.length - 1) {
            return -1;
        }

        // 获取 当前数据下标之后的数据
        const otherArr = arr.slice(i + 1);

        // 获取最大值
        const max = Math.max.apply(null, otherArr);

        return max;
    });
};

// ==========
// 1.逆序排序
// 执行用时：96 ms, 在所有 JavaScript 提交中击败了 89.28% 的用户
// 内存消耗：38.5 MB, 在所有 JavaScript 提交中击败了 33.33% 的用户
// ==========

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    const len = arr.length;
    let max = arr[len - 1];

    // 逆序遍历
    for (let i = len - 1; i >= 0; i--) {
        // 处理数组的最后一个元素
        if (i === len - 1) {
            arr[i] = -1;
            continue;
        }

        const temp = arr[i];

        // arr中的值都是大于0
        arr[i] = max;

        max = Math.max(temp, max);
    }

    return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
