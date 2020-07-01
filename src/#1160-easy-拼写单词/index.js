/*
 * @Author: Pocky
 * @Date: 2020-07-01 08:32:45
 * @LastEditTime: 2020-07-01 09:04:37
 * @URL: https://leetcode-cn.com/problems/find-words-that-can-be-formed-by-characters/
 */

// ==========
// 1.遍历查重
// 时间复杂度：o(n^2)
// 空间复杂度：o(1)
// 执行用时：96 ms, 在所有 JavaScript 提交中击败了 96.88% 的用户
// 内存消耗：42.7 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
// ==========

/**
 * @param {string[]} words 词汇表
 * @param {string} chars 字母表
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let count = 0;

    // 遍历词汇表中每个词汇
    word: for (const word of words) {
        let handleChars = chars;

        // 遍历词汇中每个字符
        char: for (const char of word) {
            // 若字母表中没有当前词汇的字符，则跳过当前词汇的遍历并取消计数叠加
            if (!handleChars.includes(char)) {
                handleChars = false;
                break char;
            } else {
                // 过滤掉已经使用的字符
                handleChars = handleChars.replace(char, '');
            }
        }

        // 字母表中是否都有当前词汇的单词
        if (handleChars !== false) {
            count += word.length;
        }
    }

    return count;
};
