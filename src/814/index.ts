/*
 * @Author: 费陶勇
 * @Date: 2021-12-17 00:57:05
 * @LastEditTime: 2021-12-17 01:00:27
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/binary-tree-pruning/submissions/
 * @FilePath: /leetcode/src/814/index.ts
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
     * 执行用时： 80 ms , 在所有 TypeScript 提交中击败了 20.00% 的用户
     * 内存消耗： 39.7 MB , 在所有 TypeScript 提交中击败了 20.00% 的用户
     * @param root
     * @returns
     */
    function pruneTree(root: TreeNode | null): TreeNode | null {
        // 处理空树
        if (root === null) {
            return null;
        }

        return dfs(root);
    }

    /**
     * 递归
     * @param root
     * @returns
     */
    function dfs(root: TreeNode): TreeNode | null {
        // 子树不为空的情况下，进行递归处理
        root.left !== null && (root.left = dfs(root.left));
        root.right !== null && (root.right = dfs(root.right));

        // 如果子树值为0，并且是叶子节点，则进行剪枝
        return root.val === 0 && root.left === null && root.right === null ? null : root;
    }
};
