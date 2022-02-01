/*
 * @Author: 费陶勇
 * @Date: 2022-02-01 13:51:34
 * @LastEditTime: 2022-02-01 13:51:35
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/merge-k-sorted-lists/
 * @FilePath: /leetcode/src/23/index.ts
 */

() => {
    /**
     * 执行用时： 72 ms , 在所有 TypeScript 提交中击败了 100.00% 的用户
     * 内存消耗： 47.1 MB , 在所有 TypeScript 提交中击败了 5.24% 的用户
     * @param lists
     * @returns
     */
    function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
        const head = new ListNode(0);
        let tempHead = head,
            tempList: number[] = [];

        lists.forEach((head) => {
            while (head !== null) {
                tempList.push(head.val);
                head = head.next;
            }
        });

        tempList = tempList.sort((a, b) => a - b);
        tempList.forEach((n) => {
            tempHead.next = new ListNode(n);
            tempHead = tempHead.next;
        });

        return head.next;
    }
};
