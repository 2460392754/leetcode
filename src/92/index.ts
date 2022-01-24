/*
 * @Author: 费陶勇
 * @Date: 2022-01-25 00:00:11
 * @LastEditTime: 2022-01-25 00:10:22
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/reverse-linked-list-ii/
 * @FilePath: /leetcode/src/92/index.ts
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
     * 执行用时： 52 ms , 在所有 TypeScript 提交中击败了 100.00% 的用户
     * 内存消耗： 44.3 MB , 在所有 TypeScript 提交中击败了 5.26% 的用户
     * @param head
     * @param left
     * @param right
     * @returns
     */
    function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
        // 处理边界情况
        if (head === null || left === right) {
            return head;
        }

        // 哨兵节点，处理边界情况，例如链头为left
        head = new ListNode(-Infinity, head);

        let startHead = null;
        let endHead = null;
        let tempHead = head;
        const reverseList: number[] = [];
        let i = 0;

        // 遍历，
        while (tempHead !== null || reverseList.length !== 0) {
            if (tempHead !== null) {
                // 反转区间
                if (startHead !== null && endHead === null) {
                    reverseList.push(tempHead.val);
                }

                // 开始前
                if (tempHead.next !== null && i + 1 === left) {
                    startHead = tempHead;
                }

                tempHead = tempHead.next;
                i++;

                // 结束后
                if (i - 1 === right) {
                    endHead = tempHead;
                    tempHead = null;
                }
            } else {
                // 重新链接
                startHead.next = new ListNode(reverseList.pop());
                startHead = (startHead as ListNode).next;
            }
        }

        // 处理边界
        if (startHead !== null) {
            startHead.next = endHead;
        }

        return head.next;
    }
};
