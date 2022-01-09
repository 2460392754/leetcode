/*
 * @Author: 费陶勇
 * @Date: 2022-01-09 16:08:47
 * @LastEditTime: 2022-01-09 16:08:49
 * @LastEditors: your name
 * @Description:https://leetcode-cn.com/problems/design-hashset/
 * @FilePath: /leetcode/src/705/index.ts
 */

() => {
    /**
     * 执行用时： 172 ms , 在所有 TypeScript 提交中击败了 65.85% 的用户
     * 内存消耗： 47 MB , 在所有 TypeScript 提交中击败了 51.22% 的用户
     */
    class MyHashSet {
        private n: number[] = [];

        constructor() {}

        add(key: number): void {
            this.n[key] = 1;
        }

        remove(key: number): void {
            this.n[key] = null;
        }

        contains(key: number): boolean {
            return !!this.n[key];
        }
    }
};
