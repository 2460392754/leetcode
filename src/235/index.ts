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
