/*
 * @Author: 费陶勇
 * @Date: 2022-01-16 21:18:18
 * @LastEditTime: 2022-01-16 21:26:38
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/reorder-list/
 * @FilePath: /leetcode/src/143/index.ts
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
     * 执行用时： 864 ms , 在所有 TypeScript 提交中击败了 5.33% 的用户
     * 内存消耗： 46.3 MB , 在所有 TypeScript 提交中击败了 49.33% 的用户
     * @param head
     * @returns
     */
    function reorderList(head: ListNode | null): void {
        if (head === null) {
            return null;
        }

        const list: ListNode[] = [];
        let tempHead = head.next;

        while (tempHead !== null) {
            list.push(new ListNode(tempHead.val, null));
            tempHead = tempHead.next;
        }

        let flag = false;
        tempHead = head;

        while (list.length > 0) {
            tempHead.next = flag ? list.shift() : list.pop();
            tempHead = tempHead.next;
            flag = !flag;
        }
    }
};
