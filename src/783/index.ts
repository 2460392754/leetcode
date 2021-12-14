/*
 * @Author: 费陶勇
 * @Date: 2021-12-15 01:33:12
 * @LastEditTime: 2021-12-15 01:33:18
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/submissions/
 * @FilePath: /leetcode/src/783/index.ts
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
     * 迭代法 (DFS)
     * 执行用时： 84 ms , 在所有 TypeScript 提交中击败了 41.18% 的用户
     * 内存消耗： 40 MB , 在所有 TypeScript 提交中击败了 17.65% 的用户
     * @param root
     * @returns
     */
    function minDiffInBST(root: TreeNode | null): number {
        // 处理 空树
        if (root === null) {
            return 0;
        }

        let res = Infinity;
        let prev: number | null = null;

        function reduction(root: TreeNode) {
            // 非叶子节点
            root.left !== null && reduction(root.left);

            // 中序遍历，从最左子数值开始
            if (prev === null) {
                prev = root.val;
            } else {
                // 获取 最小值
                res = Math.min(res, root.val - prev);
                prev = root.val;
            }

            // 非叶子节点
            root.right !== null && reduction(root.right);
        }

        reduction(root);

        return res;
    }
};
