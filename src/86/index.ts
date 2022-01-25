/*
 * @Author: 费陶勇
 * @Date: 2022-01-25 23:17:47
 * @LastEditTime: 2022-01-25 23:40:39
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/partition-list/
 * @FilePath: /leetcode/src/86/index.ts
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
     * 执行用时： 64 ms , 在所有 TypeScript 提交中击败了 100.00% 的用户
     * 内存消耗： 44.3 MB , 在所有 TypeScript 提交中击败了 6.45% 的用户
     * @param head
     * @param x
     * @returns
     */
    function partition(head: ListNode | null, x: number): ListNode | null {
        if (head === null) {
            return head;
        }

        const notHitList: number[] = [];
        const hitList: number[] = [];

        while (head !== null) {
            const val = head.val;

            head.val >= x ? hitList.push(val) : notHitList.push(val);
            head = head.next;
        }

        head = new ListNode(-Infinity);
        let tempHead = head;

        while (notHitList.length !== 0) {
            tempHead.next = new ListNode(notHitList.shift());

            tempHead = tempHead.next;
        }

        while (hitList.length !== 0) {
            tempHead.next = new ListNode(hitList.shift());

            tempHead = tempHead.next;
        }

        return head.next;
    }
};

() => {
    /**
     * 执行用时： 76 ms , 在所有 TypeScript 提交中击败了 85.48% 的用户
     * 内存消耗： 44.8 MB , 在所有 TypeScript 提交中击败了 6.45% 的用户
     * @param head
     * @param x
     * @returns
     */
    function partition(head: ListNode | null, x: number): ListNode | null {
        if (head === null) {
            return head;
        }
        // 头尾哨兵节点
        const fristHead = new ListNode(-Infinity);
        const endHead = new ListNode(-Infinity);

        // 临时节点
        let F = fristHead;
        let E = endHead;

        while (head !== null) {
            if (head.val >= x) {
                E.next = new ListNode(head.val);
                E = E.next;
            } else {
                F.next = new ListNode(head.val);
                F = F.next;
            }

            head = head.next;
        }

        // 尾头相连
        F.next = endHead.next;

        return fristHead.next;
    }
};
