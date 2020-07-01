/*
 * @Author: Pocky
 * @Date: 2020-07-01 09:16:17
 * @LastEditTime: 2020-07-01 11:22:03
 * @URL: https://leetcode-cn.com/problems/pascals-triangle/
 */

// ==========
// 1.双遍历
// 时间复杂度：o(n^2)
// 空间复杂度：o(n)
// 执行用时：84 ms, 在所有 JavaScript 提交中击败了 12.49% 的用户
// 内存消耗：32.2 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
// ==========

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    // 初始化数组长度
    const arr = Array(numRows);

    for (let i = 0; i < numRows; i++) {
        arr[i] = [];

        for (let j = 0; j <= i; j++) {
            let val = 1;

            // 跳过 数组中首尾下标位置的数据计算
            if (j !== 0 && j !== i) {
                val = arr[i - 1][j - 1] + arr[i - 1][j];
            }

            arr[i].push(val);
        }
    }

    return arr;
};

// ==========
// 2.错位相加
// 空间复杂度：o(n)
// 执行用时：68 ms, 在所有 JavaScript 提交中击败了 60.53% 的用户
// 内存消耗：32.4 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
// ==========

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    // 处理边界
    if (numRows === 0) return [];

    const arr = [[1]];

    for (let i = 1; i < numRows; i++) {
        // 获取上一个数组的值
        const prev = arr[i - 1];

        // 数据浅拷贝,防止数据污染
        const cache = [[].concat(prev, [0]), [].concat([0], prev)];

        // 数组相加
        const data = cache[0].map((n, index) => {
            return n + cache[1][index];
        });

        // i: 1
        // prev: [1]
        // cache: [[1, 0], [0, 1]]
        // data: [1, 1]

        arr.push(data);
    }

    return arr;
};

console.log(generate(5));
