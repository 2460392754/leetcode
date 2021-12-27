/*
 * @Author: 费陶勇
 * @Date: 2021-12-27 22:20:11
 * @LastEditTime: 2021-12-27 22:20:56
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/validate-binary-search-tree/
 * @FilePath: /leetcode/src/98/index.ts
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
     * BFS
     * 执行用时： 96 ms , 在所有 TypeScript 提交中击败了 19.62% 的用户
     * 内存消耗： 43.6 MB , 在所有 TypeScript 提交中击败了 9.23% 的用户
     * @param root
     * @returns
     */
    function isValidBST(root: TreeNode | null): boolean {
        // 处理空树
        if (root === null) {
            return false;
        }

        // 创建队列，初始化值
        const queue: [TreeNode, number, number][] = [[root, -Infinity, Infinity]];

        while (queue.length > 0) {
            const [node, min, max] = queue.shift();

            // 左子树判断二叉搜索树
            if (node.val <= min || node.val >= max) {
                return false;
            }

            // 处理非空左子树，并缩小最大范围
            node.left !== null && queue.push([node.left, min, node.val]);

            // 处理非空右子树，并缩小最小范围
            node.right !== null && queue.push([node.right, node.val, max]);
        }

        return true;
    }
};
