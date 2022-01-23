/*
 * @Author: 费陶勇
 * @Date: 2022-01-23 22:08:05
 * @LastEditTime: 2022-01-23 22:10:49
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * @FilePath: /leetcode/src/19/index.ts
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
     * 执行用时： 88 ms , 在所有 TypeScript 提交中击败了 18.69% 的用户
     * 内存消耗： 39.4 MB , 在所有 TypeScript 提交中击败了 71.04% 的用户
     * @param head
     * @param n
     * @returns
     */
    function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
        // 处理边界
        if (head === null || head.next === null) {
            return null;
        }

        // 存储链表引用
        const cacheList: ListNode[] = [];

        // 遍历
        while (head !== null) {
            cacheList.push(head);
            head = head.next;
        }

        const len = cacheList.length;

        // 需要被移除的节点的钱一个节点
        const head1 = cacheList[len - 1 - n];

        // 处理边界
        if (n === 1) {
            head1.next = null;
        } else {
            // 需要被移除的节点的后一个节点
            const head2 = cacheList[len - 1 - (n - 2)];

            // 处理边界
            if (len === n) {
                return head2;
            } else {
                head1.next = head2;
            }
        }

        return cacheList[0];
    }
};
