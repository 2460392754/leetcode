/*
 * @Author: 费陶勇
 * @Date: 2022-01-03 16:15:36
 * @LastEditTime: 2022-01-03 16:29:29
 * @LastEditors: your name
 * @Description:
 * @FilePath: /leetcode/src/515/index.ts
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
     * 执行用时： 88 ms , 在所有 TypeScript 提交中击败了 78.26% 的用户
     * 内存消耗： 44.6 MB , 在所有 TypeScript 提交中击败了 8.70% 的用户
     * @param root
     * @returns
     */
    function largestValues(root: TreeNode | null): number[] {
        // 处理空树
        if (root === null) {
            return [];
        }

        const queue: TreeNode[] = [root];
        const res: number[] = [];
        let cacheQueue: TreeNode[] = [];
        let curLevelMax: number = -Infinity;

        while (queue.length > 0) {
            const node = queue.shift();

            // 处理非空左右子树
            node.left !== null && cacheQueue.push(node.left);
            node.right !== null && cacheQueue.push(node.right);

            // 当前层级最大值
            curLevelMax = Math.max(curLevelMax, node.val);

            // 当前层级遍历结束，进入下一层
            if (queue.length === 0) {
                res.push(curLevelMax);
                queue.push(...cacheQueue);
                cacheQueue = [];
                curLevelMax = -Infinity;
            }
        }

        return res;
    }
};

() => {
    /**
     * DFS
     * 执行用时： 88 ms , 在所有 TypeScript 提交中击败了 78.26% 的用户
     * 内存消耗： 43.2 MB , 在所有 TypeScript 提交中击败了 26.09% 的用户
     * @param root
     * @returns
     */
    function largestValues(root: TreeNode | null): number[] {
        // 处理空树
        if (root === null) {
            return [];
        }

        const res: number[][] = [];

        function dfs(node: TreeNode, depth: number) {
            // 结构初始化
            if (typeof res[depth] === 'undefined') {
                res[depth] = [];
            }

            res[depth].push(node.val);
            node.left !== null && dfs(node.left, depth + 1);
            node.right !== null && dfs(node.right, depth + 1);
        }

        dfs(root, 0);

        return res.map((list) => {
            return Math.max(...list);
        });
    }
};
