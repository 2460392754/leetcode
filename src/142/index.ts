/*
 * @Author: 费陶勇
 * @Date: 2022-01-15 16:09:13
 * @LastEditTime: 2022-01-15 16:13:17
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/linked-list-cycle-ii/
 * @FilePath: /leetcode/src/142/index.ts
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
     * 执行用时： 76 ms , 在所有 TypeScript 提交中击败了 93.89% 的用户
     * 内存消耗： 40.7 MB , 在所有 TypeScript 提交中击败了 89.69% 的用户
     * @param head
     * @returns
     */
    function detectCycle(head: ListNode | null): ListNode | null {
        const set = new Set<ListNode>();

        while (head !== null) {
            if (set.has(head)) {
                return head;
            }

            set.add(head);
            head = head.next;
        }

        return null;
    }
};
