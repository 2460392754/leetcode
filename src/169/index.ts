/*
 * @Author: 费陶勇
 * @Date: 2022-02-06 22:56:26
 * @LastEditTime: 2022-02-06 22:58:16
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/majority-element/
 * @FilePath: /leetcode/src/169/index.ts
 */

() => {
    /**
     * hash表
     * 执行用时： 68 ms , 在所有 TypeScript 提交中击败了 92.49% 的用户
     * 内存消耗： 44.7 MB , 在所有 TypeScript 提交中击败了 15.81% 的用户
     * @param nums
     * @returns
     */
    function majorityElement(nums: number[]): number {
        const map = new Map<number, number>();
        const half = Math.floor(nums.length / 2);

        for (const n of nums) {
            const val = (map.get(n) || 0) + 1;

            map.set(n, val);
            if (val > half) return n;
        }
    }
};
