/*
 * @Author: 费陶勇
 * @Date: 2021-12-01 09:06:33
 * @LastEditTime: 2021-12-02 18:13:01
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/balanced-binary-tree/
 * @FilePath: /leetcode/src/110/index.ts
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
     * 从顶往底 暴力递归
     * 执行用时： 84 ms , 在所有 TypeScript 提交中击败了 81.40% 的用户
     * 内存消耗： 43.2 MB , 在所有 TypeScript 提交中击败了 51.94% 的用户
     * @param root
     * @returns
     */
    function isBalanced(root: TreeNode | null): boolean {
        // 处理空值
        if (root === null) {
            return true;
        }

        const left = getMaxDepth(root.left);
        const right = getMaxDepth(root.right);

        // 确保 树 的高度差小于1，继续递归遍历 左右子树
        return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
    }

    /**
     * 获取 tree 的最大深度
     * @param root
     * @returns
     */
    function getMaxDepth(root: TreeNode | null) {
        // 处理空值
        if (root === null) {
            return -1;
        }

        const left = getMaxDepth(root.left);
        const right = getMaxDepth(root.right);

        return 1 + Math.max(left, right);
    }
};
