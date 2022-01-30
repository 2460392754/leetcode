/*
 * @Author: 费陶勇
 * @Date: 2022-01-30 14:34:13
 * @LastEditTime: 2022-01-30 14:38:53
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/design-browser-history/
 * @FilePath: /leetcode/src/1472/index.ts
 */

() => {
    /**
     * 执行用时： 172 ms , 在所有 TypeScript 提交中击败了 100.00% 的用户
     * 内存消耗： 51.5 MB , 在所有 TypeScript 提交中击败了 33.33% 的用户
     */
    class BrowserHistory {
        private _stack: string[] = [];
        private _i: number = 0;

        constructor(homepage: string) {
            this._stack.push(homepage);
        }

        visit(url: string): void {
            // 移除 back 后产生的可前进记录
            this._stack.splice(this._i + 1);
            this._stack.push(url);
            this._i++;
        }

        back(steps: number): string {
            // 避免超过栈
            if (steps - this._i > 0) {
                this._i = 0;
            } else {
                this._i -= steps;
            }

            return this._stack[this._i];
        }

        forward(steps: number): string {
            const stackLen = this._stack.length - 1;

            // 避免超过栈
            if (steps + this._i > stackLen) {
                this._i = stackLen;
            } else {
                this._i += steps;
            }

            return this._stack[this._i];
        }
    }
};
