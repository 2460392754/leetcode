/*
 * @Author: 费陶勇
 * @Date: 2022-01-12 09:21:25
 * @LastEditTime: 2022-01-12 09:21:53
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/design-hashmap/
 * @FilePath: /leetcode/src/706/index.ts
 */

() => {
    /**
     * 执行用时： 188 ms , 在所有 TypeScript 提交中击败了 69.05% 的用户
     * 内存消耗： 48.2 MB , 在所有 TypeScript 提交中击败了 64.29% 的用户
     */
    class MyHashMap {
        private _hashMap: { [key: number]: number | undefined } = {};

        constructor() {}

        put(key: number, value: number): void {
            this._hashMap[key] = value;
        }

        get(key: number): number {
            const val = this._hashMap[key];

            return val === undefined ? -1 : val;
        }

        remove(key: number): void {
            this._hashMap[key] = undefined;
        }
    }
};
