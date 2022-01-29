/*
 * @Author: 费陶勇
 * @Date: 2022-01-29 17:49:20
 * @LastEditTime: 2022-01-29 17:52:26
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/merge-in-between-linked-lists/
 * @FilePath: /leetcode/src/1669/index.ts
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
     * 执行用时： 184 ms , 在所有 TypeScript 提交中击败了 100.00% 的用户
     * 内存消耗： 53.7 MB , 在所有 TypeScript 提交中击败了 8.33% 的用户
     * @param list1
     * @param a
     * @param b
     * @param list2
     * @returns
     */
    function mergeInBetween(
        list1: ListNode | null,
        a: number,
        b: number,
        list2: ListNode | null
    ): ListNode | null {
        const resHead = new ListNode(0);
        let i = 0;
        let resTempHead = resHead;

        while (list1 !== null) {
            // 把list2链表追加到list1的删除区间中
            if (a === i) {
                while (list2 !== null) {
                    resTempHead.next = new ListNode(list2.val);
                    resTempHead = resTempHead.next;
                    list2 = list2.next;
                }
            }

            // 非删除区间
            if (i < a || i > b) {
                resTempHead.next = new ListNode(list1.val);
                resTempHead = resTempHead.next;
            }

            list1 = list1.next;
            i++;
        }

        return resHead.next;
    }
};
