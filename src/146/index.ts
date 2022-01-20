/*
 * @Author: 费陶勇
 * @Date: 2022-01-20 09:42:54
 * @LastEditTime: 2022-01-20 10:35:35
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/lru-cache/
 * @FilePath: /leetcode/src/146/index.ts
 */

() => {
    /**
     * 执行用时： 3588 ms , 在所有 TypeScript 提交中击败了 5.06% 的用户
     * 内存消耗： 93 MB , 在所有 TypeScript 提交中击败了 26.46% 的用户
     */
    class LRUCache {
        // 最大缓存数
        private _cacheMax: number = 0;

        // 缓存 [key, value]
        private _cache: [number, number][] = [];

        constructor(capacity: number) {
            this._cacheMax = capacity;
        }

        get(key: number): number {
            const i = this._find(key);

            if (i === -1) {
                return -1;
            }

            const data = this._delete(i);

            this._cache.unshift(data);

            return data[1];
        }

        put(key: number, value: number): void {
            const i = this._find(key);

            i !== -1 && this._delete(i);
            this._cache.unshift([key, value]);

            if (this._cache.length > this._cacheMax) {
                this._cache.length = this._cacheMax;
            }
        }

        private _find(key: number) {
            return this._cache.findIndex(([_key]) => _key === key);
        }

        private _delete(i: number) {
            return this._cache.splice(i, 1)[0];
        }
    }
};
