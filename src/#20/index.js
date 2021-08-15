/*
 * @Author: Pocky
 * @Date: 2020-07-04 22:25:49
 * @LastEditTime: 2020-07-04 23:22:52
 * @URL: https://leetcode-cn.com/problems/valid-parentheses/
 */

// ==========
// 1.栈
// 时间复杂度：o(n)
// 空间复杂度：o(n)
// 执行用时：80 ms, 在所有 JavaScript 提交中击败了 27.69%的用户
// 内存消耗：32.3 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
// ==========

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const len = s.length;

    // 处理边界
    if (len === 0) return true;

    // 处理非闭合的字符串
    if (len % 2 !== 0) return false;

    // 创建 哈希表
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    // 创建空栈
    const stack = [];

    for (let i = 0; i < len; i++) {
        const char = s[i];

        // 当前值为括号中的左括号时，保持到栈中，用于后续的括号闭合匹配
        if (map[char]) {
            stack.push(char);
        } else {
            // 获取并删除 栈中的最后一个值
            const stackValue = map[stack.pop()];

            // 匹配 括号是否正确闭合
            if (stackValue !== char) {
                return false;
            }
        }
    }

    // 保证 栈已经被匹配完并清空
    return stack.length === 0;
};
