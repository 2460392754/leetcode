/*
 * @Author: 费陶勇
 * @Date: 2022-01-07 00:18:00
 * @LastEditTime: 2022-01-07 00:18:06
 * @LastEditors: your name
 * @Description:
 * @FilePath: /leetcode/src/232/index.ts
 */

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

() => {
    /**
     * 执行用时： 72 ms , 在所有 TypeScript 提交中击败了 68.46% 的用户
     * 内存消耗： 39.2 MB , 在所有 TypeScript 提交中击败了 80.00% 的用户
     */
    class MyQueue {
        private queue: number[] = [];

        constructor() {}

        push(x: number): void {
            this.queue.push(x);
        }

        pop(): number {
            return this.queue.shift();
        }

        peek(): number {
            return this.queue[0];
        }

        empty(): boolean {
            return this.queue.length === 0;
        }
    }
};
