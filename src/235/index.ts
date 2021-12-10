/*
 * @Author: 费陶勇
 * @Date: 2021-12-10 09:49:09
 * @LastEditTime: 2021-12-10 20:37:05
 * @LastEditors: your name
 * @Description:https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * @FilePath: /leetcode/src/235/index.ts
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
     * 执行用时： 84 ms , 在所有 TypeScript 提交中击败了 95.70% 的用户
     * 内存消耗： 48.2 MB , 在所有 TypeScript 提交中击败了 8.60% 的用户
     * @param root
     * @param p
     * @param q
     * @returns
     */
    function lowestCommonAncestor(
        root: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null
    ): TreeNode | null {
        if (!root) return root;

        if (root.val < p.val && root.val < q.val) {
            return lowestCommonAncestor(root.right, p, q);
        } else if (root.val > p.val && root.val > q.val) {
            return lowestCommonAncestor(root.left, p, q);
        }

        return root;
    }
};
