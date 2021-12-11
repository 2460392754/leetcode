/*
 * @Author: 费陶勇
 * @Date: 2021-12-11 22:55:43
 * @LastEditTime: 2021-12-11 22:55:47
 * @LastEditors: your name
 * @Description:
 * @FilePath: /leetcode/src/543/index.ts
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
     * 递归法(DFS)
     * 执行用时： 96 ms , 在所有 TypeScript 提交中击败了 22.58% 的用户
     * 内存消耗： 42.4 MB , 在所有 TypeScript 提交中击败了 68.82% 的用户
     * @param root
     * @returns
     */
    function diameterOfBinaryTree(root: TreeNode | null): number {
        // 跳过空树
        if (root === null) {
            return 0;
        }

        let total = 0;

        function recursion(root: TreeNode | null): number {
            // 处理 左子数为空
            const leftVal = root.left === null ? 0 : recursion(root.left);

            // 处理 右子树为空
            const rightVal = root.right === null ? 0 : recursion(root.right);

            // 获取最大的总高度
            total = Math.max(total, leftVal + rightVal);

            // 当前计算数高度加1
            return Math.max(leftVal, rightVal) + 1;
        }

        recursion(root);

        return total;
    }
};
