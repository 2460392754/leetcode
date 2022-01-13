/*
 * @Author: 费陶勇
 * @Date: 2022-01-13 21:29:50
 * @LastEditTime: 2022-01-13 21:33:54
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/rotate-list/
 * @FilePath: /leetcode/src/61/index.ts
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
     * 执行用时： 104 ms , 在所有 TypeScript 提交中击败了 13.97% 的用户
     * 内存消耗： 39.8 MB , 在所有 TypeScript 提交中击败了 81.62% 的用户
     * @param head
     * @param k
     * @returns
     */
    function rotateRight(head: ListNode | null, k: number): ListNode | null {
        // 处理空链表
        if (head === null) {
            return null;
        }

        const queue: number[] = [];

        // 遍历链表
        while (head !== null) {
            queue.push(head.val);
            head = head.next;
        }

        // 去余
        k %= queue.length;

        // 翻转顺序
        for (let i = 0; i < k; i++) {
            queue.unshift(queue.pop());
        }

        head = new ListNode(queue.shift(), null);
        let tempHead = head;

        // 组合
        while (queue.length !== 0) {
            const val = queue.shift();

            tempHead.next = new ListNode(val, null);
            tempHead = tempHead.next;
        }

        return head;
    }
};
