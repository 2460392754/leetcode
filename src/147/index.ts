/*
 * @Author: 费陶勇
 * @Date: 2022-01-18 22:21:10
 * @LastEditTime: 2022-01-18 22:21:25
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/insertion-sort-list/
 * @FilePath: /leetcode/src/147/index.ts
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
     * 执行用时： 128 ms , 在所有 TypeScript 提交中击败了 25.00% 的用户
     * 内存消耗： 42.4 MB , 在所有 TypeScript 提交中击败了 10.00% 的用户
     * @param head
     * @returns
     */
    function insertionSortList(head: ListNode | null): ListNode | null {
        if (head === null) {
            return null;
        }

        const resHead = new ListNode(-Infinity);
        let tempHead = resHead;

        while (head !== null) {
            // 排序，从小到大
            while (tempHead !== null && tempHead.next !== null) {
                if (tempHead.val <= head.val && head.val < tempHead.next.val) {
                    break;
                }

                tempHead = tempHead.next;
            }

            // 节点插入
            tempHead.next = new ListNode(head.val, tempHead.next);

            // 重置位置
            tempHead = resHead;

            // 遍历下一个链表节点
            head = head.next;
        }

        return resHead.next;
    }
};
