/*
 * @Author: 费陶勇
 * @Date: 2021-12-19 01:11:41
 * @LastEditTime: 2021-12-19 01:13:03
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/
 * @FilePath: /leetcode/src/109/index.ts
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

() => {
    /**
     * DFS
     * 执行用时： 88 ms , 在所有 TypeScript 提交中击败了 93.18% 的用户
     * 内存消耗： 45.9 MB , 在所有 TypeScript 提交中击败了 9.09% 的用户
     * @param head
     * @returns
     */
    function sortedListToBST(head: ListNode | null): TreeNode | null {
        // 处理空数据
        if (head === null) {
            return null;
        }

        const headList: number[] = headDFS(head);

        return helper(headList, 0, headList.length);
    }

    function headDFS(head: ListNode | null, list: number[] = []): number[] {
        if (head === null) {
            return list;
        }

        list.push(head.val);
        return headDFS(head.next, list);
    }

    const helper = (nums: number[], left: number | null, right: number | null) => {
        if (left === right) return null;

        let mid = left + ((right - left) >> 1);
        let node = new TreeNode(nums[mid]);

        node.left = helper(nums, left, mid);
        node.right = helper(nums, mid + 1, right);

        return node;
    };
};
