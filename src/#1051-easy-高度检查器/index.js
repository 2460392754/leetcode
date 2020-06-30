/*
 * @Author: Pocky
 * @Date: 2020-06-30 14:27:26
 * @LastEditTime: 2020-06-30 15:57:20
 * @URL: https://leetcode-cn.com/problems/height-checker/
 */

/**
 * 时间复杂度：o(n^2)
 * 空间复杂度：o(1)
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    // 浅拷贝数组
    const tempArr = heights.concat();

    // 计数
    let count = 0;

    // 排序， 从小到大
    tempArr.sort((a, b) => a - b);

    // 对比排序前后的数据差异数量
    tempArr.forEach((n, i) => {
        if (n !== heights[i]) {
            count++;
        }
    });

    return count;
};
