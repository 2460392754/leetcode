/*
 * @Author: 费陶勇
 * @Date: 2022-01-23 01:01:44
 * @LastEditTime: 2022-01-23 01:01:50
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/sort-list/
 * @FilePath: /leetcode/src/148/index.ts
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
     * 执行用时： 3840 ms , 在所有 TypeScript 提交中击败了 9.68% 的用户
     * 内存消耗： 51 MB , 在所有 TypeScript 提交中击败了 100.00% 的用户
     * @param head
     * @returns
     */
    function sortList(head: ListNode | null): ListNode | null {
        return sort(head, new ListNode(-Infinity));
    }

    /**
     * @param head
     * @param startHead 哨兵链表
     */
    function sort(head: ListNode, startHead: ListNode) {
        while (head) {
            let next = head.next,
                tempHead = startHead;

            while (tempHead.next && tempHead.next.val < head.val) {
                tempHead = tempHead.next;
            }

            head.next = tempHead.next;
            tempHead.next = head;
            head = next;
        }

        return startHead.next;
    }
};

() => {
    function sortList(head: ListNode | null): ListNode | null {
        if (head === null) {
            return null;
        }

        let sortList: number[] = [];

        while (head !== null) {
            sortList.push(head.val);
            head = head.next;
        }

        sortList = sortList.sort((a, b) => a - b);

        head = new ListNode(sortList.shift());
        let tempHead = head;

        while (sortList.length > 0) {
            tempHead.next = new ListNode(sortList.shift());
            tempHead = tempHead.next;
        }

        return head;
    }
};
