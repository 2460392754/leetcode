/*
 * @Author: 费陶勇
 * @Date: 2022-01-11 11:24:47
 * @LastEditTime: 2022-01-11 11:25:52
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/remove-linked-list-elements/
 * @FilePath: /leetcode/src/203/index.ts
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
     * 执行用时： 84 ms , 在所有 TypeScript 提交中击败了 95.31% 的用户
     * 内存消耗： 43.5 MB , 在所有 TypeScript 提交中击败了 44.27% 的用户
     * @param head
     * @param val
     * @returns
     */
    function removeElements(head: ListNode | null, val: number): ListNode | null {
        // 创建新链表，链头为-1，next指向head
        const ret = new ListNode(-1, head);
        let cur = ret;

        // 遍历链表
        while (cur.next) {
            // 匹配值相同，则进行链接下一个
            if (cur.next.val === val) {
                cur.next = cur.next.next;
            } else {
                cur = cur.next;
            }
        }

        return ret.next;
    }
};
