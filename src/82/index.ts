/*
 * @Author: 费陶勇
 * @Date: 2022-01-26 09:47:10
 * @LastEditTime: 2022-01-26 10:13:24
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
 * @FilePath: /leetcode/src/82/index.ts
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
     * 执行用时： 80 ms , 在所有 TypeScript 提交中击败了 75.66% 的用户
     * 内存消耗： 45.3 MB , 在所有 TypeScript 提交中击败了 5.26% 的用户
     * @param head
     * @returns
     */
    function deleteDuplicates(head: ListNode | null): ListNode | null {
        // 处理边界
        if (head === null) {
            return null;
        }

        const hashMap: [number, number][] = [];
        let curN = Infinity;

        while (head !== null) {
            if (curN !== head.val) {
                curN = head.val;
                hashMap.push([curN, 0]);
            }

            const len = hashMap.length;
            const n = hashMap[len - 1][1];

            hashMap[len - 1] = [head.val, n + 1];
            head = head.next;
        }

        head = new ListNode(Infinity);
        let vHead = head;

        for (const [n, count] of hashMap) {
            // 去重
            if (count !== 1) continue;

            vHead.next = new ListNode(Number(n));
            vHead = vHead.next;
        }

        return head.next;
    }
};

() => {
    /**
     * 执行用时： 64 ms , 在所有 TypeScript 提交中击败了 100.00% 的用户
     * 内存消耗： 44 MB , 在所有 TypeScript 提交中击败了 5.26% 的用户
     * @param head
     * @returns
     */
    function deleteDuplicates(head: ListNode | null): ListNode | null {
        if (head === null || head.next === null) {
            return head;
        }

        if (head.val !== head.next.val) {
            head.next = deleteDuplicates(head.next);
        } else {
            let vHead = head.next;

            while (vHead && vHead.val === head.val) {
                vHead = vHead.next;
            }

            return deleteDuplicates(vHead);
        }

        return head;
    }
};
