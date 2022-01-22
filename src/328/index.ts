/*
 * @Author: 费陶勇
 * @Date: 2022-01-22 23:24:18
 * @LastEditTime: 2022-01-22 23:40:26
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/odd-even-linked-list/
 * @FilePath: /leetcode/src/328/index.ts
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
     * 执行用时： 84 ms , 在所有 TypeScript 提交中击败了 74.58% 的用户
     * 内存消耗： 40.8 MB , 在所有 TypeScript 提交中击败了 20.34% 的用户
     * @param head
     * @returns
     */
    function oddEvenList(head: ListNode | null): ListNode | null {
        // 处理边界
        if (head === null) {
            return null;
        }

        // 若链头下的子链表或孙链表为空，则无需处理
        if (head.next === null || head.next.next === null) {
            return head;
        }

        // 偶数链表
        const evenHead: ListNode = new ListNode(head.next.val);

        // 创建临时链表
        let evenTempHead = evenHead;
        let tempHead = head.next.next;

        // 重新处理链表顺序, 奇数相连
        // 链头 -> 子链表 -> 孙链表，改成 链头 -> 孙链表
        head = new ListNode(head.val, head.next.next);

        // 遍历
        while (tempHead !== null && tempHead.next !== null) {
            // 提取偶数节点, 并链接
            evenTempHead.next = new ListNode(tempHead.next.val);
            evenTempHead = evenTempHead.next;

            // 跳过偶数节点，并链接
            tempHead.next = tempHead.next.next;

            // 处理 总链表节点数量为偶数时，奇数链表链接到最后 next 为 null 的情况
            tempHead.next !== null && (tempHead = tempHead.next);
        }

        // 奇数链表链接偶数链表
        tempHead.next = evenHead;

        return head;
    }
};
