/*
 * @Author: 费陶勇
 * @Date: 2022-02-05 00:40:48
 * @LastEditTime: 2022-02-05 00:45:55
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/submissions/
 * @FilePath: /leetcode/src/3/index.ts
 */

() => {
    /**
     * 执行用时： 244 ms , 在所有 TypeScript 提交中击败了 15.47% 的用户
     * 内存消耗： 48.6 MB , 在所有 TypeScript 提交中击败了 5.02% 的用户
     * @param s
     * @returns
     */
    function lengthOfLongestSubstring(s: string): number {
        if (s.length <= 1) return s.length;

        let max = 1;

        for (let i = 0, len = s.length; i < len; i++) {
            const map = new Map();
            map.set(s[i], 1);

            second: for (let j = i + 1; j < len; j++) {
                if (!map.has(s[j])) {
                    map.set(s[j], 1);
                    // 没有重复，比较出，最大值Ï
                    max = Math.max(max, j - i + 1);
                } else {
                    // 有重复，直接下一个
                    break second;
                }
            }
        }

        return max;
    }
};
