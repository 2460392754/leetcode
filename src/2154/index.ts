/*
 * @Author: 费陶勇
 * @Date: 2022-02-02 22:30:31
 * @LastEditTime: 2022-02-02 22:31:37
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/keep-multiplying-found-values-by-two/
 * @FilePath: /leetcode/src/2154/index.ts
 */

() => {
    /**
     * 执行用时： 64 ms , 在所有 TypeScript 提交中击败了 82.35% 的用户
     * 内存消耗： 43.8 MB , 在所有 TypeScript 提交中击败了 76.47% 的用户
     * @param nums
     * @param original
     * @returns
     */
    function findFinalValue(nums: number[], original: number): number {
        if (nums.includes(original) == false) {
            return original;
        }

        function deep(list: number[], n: number): number {
            return list.includes(n) ? deep(list, n * 2) : n;
        }

        return deep(nums, original * 2);
    }
};
