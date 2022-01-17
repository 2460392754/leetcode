/*
 * @Author: 费陶勇
 * @Date: 2022-01-17 09:24:00
 * @LastEditTime: 2022-01-17 09:24:45
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * @FilePath: /leetcode/src/24/index.ts
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
     * 执行用时： 68 ms , 在所有 TypeScript 提交中击败了 93.08% 的用户
     * 内存消耗： 39.4 MB , 在所有 TypeScript 提交中击败了 48.85% 的用户
     * @param head
     * @returns
     */
    function swapPairs(head: ListNode | null): ListNode | null {
        if (head === null) {
            return null;
        }

        const queue: ListNode[] = [];
        let tempQueue: ListNode[] = [];

        while (head !== null) {
            tempQueue.unshift(new ListNode(head.val));
            head = head.next;

            const len = tempQueue.length;
            if (len === 2 || (head === null && len === 1)) {
                queue.push(...tempQueue);
                tempQueue = [];
            }
        }

        head = queue.shift();
        let tempHead = head;

        while (queue.length > 0) {
            tempHead.next = queue.shift();
            tempHead = tempHead.next;
        }

        return head;
    }
};
