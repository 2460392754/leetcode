/*
 * @Author: Pocky
 * @Date: 2020-07-02 14:22:51
 * @LastEditTime: 2020-07-02 15:17:44
 * @URL: https://leetcode-cn.com/problems/is-subsequence/
 */

// ==========
// 1.贪心算法
// 时间复杂度：o(n)
// 空间复杂度：o(1)
// 执行用时：76 ms, 在所有 JavaScript 提交中击败了 56.13% 的用户
// 内存消耗：31.7 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
// ==========

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const posI = t.indexOf(char);

        // 查询是否非空非空
        if (posI === -1) {
            return false;
        } else {
            // 切割字符串
            t = t.substr(posI + 1);
        }
    }

    return true;
};

// ==========
// 2.双指针
// 时间复杂度：o(n)
// 空间复杂度：o(1)
// 执行用时：68 ms, 在所有 JavaScript 提交中击败了 87.36% 的用户
// 内存消耗：35.2 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
// ==========

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    // 处理边界
    if (s.length === 0) return true;

    const sLen = s.length;
    const tLen = t.length;

    // 创建双指针变量
    let sPos = 0;
    let tPos = 0;

    while (tPos < tLen) {
        // 字符对比成功
        if (t[tPos] === s[sPos]) {
            sPos++;
        }

        // 子序列对比完成
        if (sPos === sLen) {
            return true;
        }

        tPos++;
    }

    return false;
};
