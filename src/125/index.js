/*
 * @Author: Pocky
 * @Date: 2020-07-04 23:26:58
 * @LastEditTime: 2020-07-05 21:43:12
 * @URL: https://leetcode-cn.com/problems/valid-palindrome/
 */

// ==========
// 1.双指针
// 执行用时：104 ms, 在所有 JavaScript 提交中击败了 24.28% 的用户
// 内存消耗：37.8 MB, 在所有 JavaScript 提交中击败了 38.46% 的用户
// ==========

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // 处理边界
    if (s.length === 0) return true;

    // 去重 所有空格 和 非字符数字
    const s2 = s.replace(/\W|_/g, '').toLowerCase();
    const len = s2.length;

    // 向下取整
    const middleLen = parseInt(len / 2);

    for (let i = 0; i < middleLen; i++) {
        const left = s2[i];
        const right = s2[len - 1 - i];

        if (left !== right) {
            return false;
        }
    }

    return true;
};
