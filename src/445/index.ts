/*
 * @Author: 费陶勇
 * @Date: 2022-01-27 18:53:07
 * @LastEditTime: 2022-01-27 18:54:21
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/add-two-numbers-ii/
 * @FilePath: /leetcode/src/445/index.ts
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
     * 执行用时： 100 ms , 在所有 TypeScript 提交中击败了 100.00% 的用户
     * 内存消耗： 47.1 MB , 在所有 TypeScript 提交中击败了 8.00% 的用户
     * @param l1
     * @param l2
     * @returns
     */
    function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        if (l1 === null || l2 === null) {
            return l1 === null ? l2 : l1;
        }

        let tL1 = l1,
            tL2 = l2,
            l1I = 0,
            l2I = 0;

        while (tL1 !== null || tL2 !== null) {
            if (tL1 !== null) {
                tL1 = tL1.next;
                l1I++;
            }

            if (tL2 !== null) {
                tL2 = tL2.next;
                l2I++;
            }
        }

        let flag;

        if (l1I >= l2I) {
            tL1 = l1;
            tL2 = l2;
            flag = l1;
        } else {
            tL1 = l2;
            tL2 = l1;
            [l1I, l2I] = [l2I, l1I];
            flag = l2;
        }

        const cache: number[] = [];

        while (l1I !== 0) {
            if (l1I > l2I) {
                cache.push(tL1.val);
                tL1 = tL1.next;
                l1I--;
            } else {
                tL1.val += tL2.val;
                cache.push(tL1.val);
                tL1 = tL1.next;
                tL2 = tL2.next;
                l1I--;
                l2I--;
            }
        }

        let needAdd = false;

        for (let i = cache.length - 1; i >= 0; i--) {
            let val = cache[i];

            if (val >= 10) {
                cache[i] -= 10;

                if (i !== 0) {
                    cache[i - 1]++;
                } else {
                    needAdd = true;
                }
            }
        }

        let temp = flag;

        while (cache.length > 0) {
            temp.val = cache.shift();
            temp = temp.next;
        }

        if (flag.val >= 10 || needAdd) {
            !needAdd && (flag.val -= 10);
            flag = new ListNode(1, flag);
        }

        return flag;
    }
};
