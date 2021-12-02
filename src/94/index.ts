/*
 * @Author: 费陶勇
 * @Date: 2021-08-18 00:31:18
 * @LastEditTime: 2021-08-18 00:57:39
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/binary-tree-inorder-traversal/submissions/
 * @FilePath: /leetcode/src/94.ts
 */

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
     * 递归
     * 执行用时： 72 ms , 在所有 TypeScript 提交中击败了 87.86% 的用户
     * 内存消耗： 39.4 MB , 在所有 TypeScript 提交中击败了 63.58% 的用户
     * @param root
     * @returns
     */
    function inorderTraversal(root: TreeNode | null): number[] {
        const arr = [];

        traverse(root, arr);

        return arr;
    }

    function traverse(tree: TreeNode | null, arr: number[]) {
        if (tree === null) return;

        traverse(tree.left, arr);
        arr.push(tree.val);
        traverse(tree.right, arr);
    }
};

() => {
    /**
     * 迭代法
     * 执行用时： 76 ms , 在所有 TypeScript 提交中击败了 76.30% 的用户
     * 内存消耗： 39.5 MB , 在所有 TypeScript 提交中击败了 34.68% 的用户
     * @param root
     * @returns
     */
    function inorderTraversal(root: TreeNode | null): number[] {
        const stack = [];
        const res = [];

        while (root !== null || stack.length > 0) {
            while (root) {
                stack.push(root);
                root = root.left;
            }

            root = stack.pop();
            res.push(root.val);
            root = root.right;
        }

        return res;
    }
};
