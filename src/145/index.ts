/*
 * @Author: 费陶勇
 * @Date: 2021-12-06 10:04:35
 * @LastEditTime: 2021-12-06 10:12:37
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/binary-tree-postorder-traversal/submissions/
 * @FilePath: /leetcode/src/145/index.ts
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
     * 迭代法
     * 执行用时： 88 ms , 在所有 TypeScript 提交中击败了 9.47% 的用户
     * 内存消耗： 39.6 MB , 在所有 TypeScript 提交中击败了 16.29% 的用户
     * @param root
     * @returns
     */
    function postorderTraversal(root: TreeNode | null): number[] {
        // 跳过根节点为空
        if (root === null) {
            return [];
        }

        // 创建栈，让根节点入栈
        const stack = [root];
        const res: number[] = [];

        while (stack.length) {
            // 出栈
            const curRoot = stack.pop();

            // 倒序追加数据
            res.unshift(curRoot.val);

            // 子节点不为空，则进行迭代处理
            curRoot.left && stack.push(curRoot.left);
            curRoot.right && stack.push(curRoot.right);
        }

        return res;
    }
};

() => {
    /**
     * 递归法
     * 执行用时： 80 ms , 在所有 TypeScript 提交中击败了 36.74% 的用户
     * 内存消耗： 39.4 MB , 在所有 TypeScript 提交中击败了 64.77% 的用户
     * @param root
     * @returns
     */
    function postorderTraversal(root: TreeNode | null): number[] {
        // 跳过根节点为空
        if (root === null) {
            return [];
        }

        const res: number[] = [];

        recursion(root, res);

        return res;
    }

    /**
     * 递归
     * @param root
     * @param res
     */
    function recursion(root: TreeNode, res: number[]) {
        res.unshift(root.val);

        root.right && recursion(root.right, res);
        root.left && recursion(root.left, res);
    }
};
