/*
 * @Author: 费陶勇
 * @Date: 2021-12-25 11:29:55
 * @LastEditTime: 2021-12-25 14:38:19
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/binary-tree-right-side-view/
 * @FilePath: /leetcode/src/199/index.ts
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
     * 层序遍历(BFS)
     * 执行用时： 80 ms , 在所有 TypeScript 提交中击败了 63.29% 的用户
     * 内存消耗： 40 MB , 在所有 TypeScript 提交中击败了 5.06% 的用户
     * @param root
     * @returns
     */
    function rightSideView(root: TreeNode | null): number[] {
        // 处理空树
        if (root === null) {
            return [];
        }
        // 创建队列
        const queue: TreeNode[] = [root];

        // 创建返回值
        const res: number[] = [];

        while (queue.length > 0) {
            const cache = [];
            const len = queue.length;

            // 层序遍历
            for (let i = 0; i < len; i++) {
                const node = queue.shift();

                cache.push(node.val);

                // 只迭代非空右树
                node.left !== null && queue.push(node.left);
                node.right !== null && queue.push(node.right);
            }

            res.push(cache[cache.length - 1]);
        }

        return res;
    }
};

() => {
    /**
     * dfs
     * 执行用时： 76 ms , 在所有 TypeScript 提交中击败了 86.08% 的用户
     * 内存消耗： 39.6 MB , 在所有 TypeScript 提交中击败了 51.90% 的用户
     * @param root
     * @returns
     */
    function rightSideView(root: TreeNode | null): number[] {
        // 处理空树
        if (root === null) {
            return [];
        }

        const res: number[] = [];

        dfs(root, 0, res);

        return res;
    }

    function dfs(node: TreeNode, depth: number, res: number[]) {
        res[depth] = node.val;

        // 遍历非空子树
        node.left !== null && dfs(node.left, depth + 1, res);
        node.right !== null && dfs(node.right, depth + 1, res);
    }
};
