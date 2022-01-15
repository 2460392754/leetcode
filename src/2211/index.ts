/*
 * @Author: 费陶勇
 * @Date: 2022-01-15 14:58:19
 * @LastEditTime: 2022-01-15 16:15:11
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
 * @FilePath: /leetcode/src/2211/index.ts
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
     * 执行用时： 84 ms , 在所有 TypeScript 提交中击败了 35.78% 的用户
     * 内存消耗： 39.6 MB , 在所有 TypeScript 提交中击败了 99.04% 的用户
     * @param head
     * @returns
     */
    function reverseList(head: ListNode | null): ListNode | null {
        if (head === null) {
            return null;
        }

        const stack: number[] = [];

        // 收集链表值
        while (head !== null) {
            stack.push(head.val);
            head = head.next;
        }

        head = new ListNode(stack.pop());
        let tempHead = head;

        // 重新创建链表对象
        while (stack.length > 0) {
            tempHead.next = new ListNode(stack.pop());
            tempHead = tempHead.next;
        }

        return head;
    }
};

() => {
    /**
     * 执行用时： 72 ms , 在所有 TypeScript 提交中击败了 92.33% 的用户
     * 内存消耗： 39.5 MB , 在所有 TypeScript 提交中击败了 99.04% 的用户
     * @param head
     * @returns
     */
    function reverseList(head: ListNode | null): ListNode | null {
        let prev: ListNode | null = null;
        let cur: ListNode | null = head;

        while (cur !== null) {
            const next = cur.next;

            cur.next = prev;
            prev = cur;
            cur = next;
        }

        return prev;
    }
};
