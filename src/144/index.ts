/*
 * @Author: 费陶勇
 * @Date: 2021-12-05 11:26:16
 * @LastEditTime: 2021-12-05 11:50:58
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/binary-tree-preorder-traversal/submissions/
 * @FilePath: /leetcode/src/144/index.ts
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
     * 遍历法（BFS、栈）
     * 执行用时： 76 ms , 在所有 TypeScript 提交中击败了 61.80% 的用户
     * 内存消耗： 39.5 MB , 在所有 TypeScript 提交中击败了 36.87% 的用户
     * @param root
     * @returns
     */
    function preorderTraversal(root: TreeNode | null): number[] {
        // 根节点为null，返回空数据
        if (root === null) {
            return [];
        }

        // 返回的数据
        const res = [];

        // 创建栈, 让 根节点入栈
        const stack = [root];

        // 遍历队列，直到清空
        while (stack.length) {
            // 先进后出，后进献出
            // 获取栈中的最后一个数据，并出栈
            const curRoot = stack.pop();

            // 记录数据
            res.push(curRoot.val);

            // 右子树不为null, 则入栈
            if (curRoot.right !== null) {
                stack.push(curRoot.right);
            }

            // 左子树不为null, 则入栈
            if (curRoot.left !== null) {
                stack.push(curRoot.left);
            }
        }

        return res;
    }
};

() => {
    /**
     * 递归法
     * 执行用时： 76 ms , 在所有 TypeScript 提交中击败了 61.80% 的用户
     * 内存消耗： 39.3 MB , 在所有 TypeScript 提交中击败了 87.00% 的用户
     * @param root
     */
    function preorderTraversal(root: TreeNode | null): number[] {
        // 根节点为null，返回空数据
        if (root === null) {
            return [];
        }

        const res = [];

        recursion(root, res);

        return res;
    }

    /**
     * 处理递归
     * @param root
     * @param res
     */
    function recursion(root: TreeNode, res: number[]) {
        // 记录数据
        res.push(root.val);

        // 节点不为空，则进行递归处理
        root.left !== null && recursion(root.left, res);
        root.right !== null && recursion(root.right, res);
    }
};
