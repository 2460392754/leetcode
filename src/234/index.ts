/*
 * @Author: 费陶勇
 * @Date: 2022-01-10 09:38:36
 * @LastEditTime: 2022-01-10 09:39:38
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/palindrome-linked-list/
 * @FilePath: /leetcode/src/234/index.ts
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
     * 执行用时： 200 ms , 在所有 TypeScript 提交中击败了 30.18% 的用户
     * 内存消耗： 65.5 MB , 在所有 TypeScript 提交中击败了 23.87% 的用户
     * @param head
     * @returns
     */
    function isPalindrome(head: ListNode | null): boolean {
        // 处理边界
        if (head === null || head.next === null) {
            return true;
        }

        const valList: number[] = [];

        while (head !== null) {
            valList.push(head.val);
            head = head.next;
        }

        const len = valList.length;
        const end = valList.splice((len % 2 === 0 ? len : len + 1) / 2);
        const start = valList.splice(0, (len % 2 === 0 ? len : len - 1) / 2);

        return String(start) === String(end.reverse());
    }
};
