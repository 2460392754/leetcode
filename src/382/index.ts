/*
 * @Author: 费陶勇
 * @Date: 2022-01-31 22:05:36
 * @LastEditTime: 2022-01-31 22:06:19
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/linked-list-random-node/
 * @FilePath: /leetcode/src/382/index.ts
 */
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

() => {
    /**
     * 执行用时： 88 ms , 在所有 TypeScript 提交中击败了 100.00% 的用户
     * 内存消耗： 49.2 MB , 在所有 TypeScript 提交中击败了 5.69% 的用户
     */
    class Solution {
        private _list: number[] = [];
        private _len: number = 0;

        constructor(head: ListNode | null) {
            while (head !== null) {
                this._list.push(head.val);
                head = head.next;
            }

            this._len = this._list.length;
        }

        getRandom(): number {
            const i = Math.floor(Math.random() * this._len);

            return this._list[i];
        }
    }
};
