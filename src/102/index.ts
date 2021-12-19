/*
 * @Author: 费陶勇
 * @Date: 2021-12-19 21:03:52
 * @LastEditTime: 2021-12-19 21:14:21
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * @FilePath: /leetcode/src/102/index.ts
 */

() => {
    /**
     * 迭代法(DFS)
     * 执行用时： 56 ms , 在所有 TypeScript 提交中击败了 100.00% 的用户
     * 内存消耗： 39.9 MB , 在所有 TypeScript 提交中击败了 52.46% 的用户
     * @param root
     * @returns
     */
    function levelOrder(root: TreeNode | null): number[][] {
        // 处理空树
        if (root === null) {
            return [];
        }

        const res: number[][] = [];

        dfs(root, res, 0);

        return res;
    }

    function dfs(root: TreeNode, res: number[][], depth: number) {
        // 处理数据结构
        if (typeof res[depth] === 'undefined') {
            res[depth] = [];
        }

        res[depth].push(root.val);

        // 递归子树
        root.left !== null && dfs(root.left, res, depth + 1);
        root.right !== null && dfs(root.right, res, depth + 1);
    }
};

() => {
    /**
     * 遍历法(BFS)
     * 执行用时： 80 ms , 在所有 TypeScript 提交中击败了 63.48% 的用户
     * 内存消耗： 40 MB , 在所有 TypeScript 提交中击败了 18.26% 的用户
     * @param root
     * @returns
     */
    function levelOrder(root: TreeNode | null): number[][] {
        // 处理空树
        if (root === null) {
            return [];
        }

        const res: number[][] = [];

        // 创建队列
        const queue: [TreeNode, number][] = [[root, 0]];

        // 处理队列
        while (queue.length !== 0) {
            const [node, depth] = queue.shift();

            // 数据结构预处理
            if (typeof res[depth] === 'undefined') {
                res[depth] = [];
            }

            res[depth].push(node.val);
            node.left !== null && queue.push([node.left, depth + 1]);
            node.right !== null && queue.push([node.right, depth + 1]);
        }

        return res;
    }
};
