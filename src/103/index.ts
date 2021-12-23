/*
 * @Author: 费陶勇
 * @Date: 2021-12-23 09:58:59
 * @LastEditTime: 2021-12-23 10:13:37
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/submissions/
 * @FilePath: /leetcode/src/103/index.ts
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
     * 遍历法（BFS)
     * 执行用时： 84 ms , 在所有 TypeScript 提交中击败了 30.84% 的用户
     * 内存消耗： 40 MB , 在所有 TypeScript 提交中击败了 10.28% 的用户
     * @param root
     * @returns
     */
    function zigzagLevelOrder(root: TreeNode | null): number[][] {
        // 处理空树
        if (root === null) {
            return [];
        }

        // 创建队列，并让根树入队
        const queue: [TreeNode, number][] = [[root, 0]];
        const res: number[][] = [];

        // 遍历队列
        while (queue.length > 0) {
            const [node, depth] = queue.shift();

            // 初始化
            if (typeof res[depth] === 'undefined') {
                res[depth] = [];
            }

            // 处理数据追加格式
            if (depth % 2 === 0) {
                res[depth].push(node.val);
            } else {
                res[depth].unshift(node.val);
            }

            // 遍历左右非空子树
            node.left !== null && queue.push([node.left, depth + 1]);
            node.right !== null && queue.push([node.right, depth + 1]);
        }

        return res;
    }
};

() => {
    /**
     * 递归法(DFS)
     * 执行用时： 88 ms , 在所有 TypeScript 提交中击败了 20.56% 的用户
     * 内存消耗： 39.9 MB , 在所有 TypeScript 提交中击败了 38.32% 的用户
     * @param root
     * @returns
     */
    function zigzagLevelOrder(root: TreeNode | null): number[][] {
        // 处理空树
        if (root === null) {
            return [];
        }

        const res: number[][] = [];

        dfs(root, 0, res);

        return res;
    }

    function dfs(root: TreeNode, depth: number, res: number[][]): void {
        // 初始化
        if (typeof res[depth] === 'undefined') {
            res[depth] = [];
        }

        const { val, left, right } = root;
        const nextDepth = depth + 1;

        res[depth][depth % 2 === 0 ? 'push' : 'unshift'](val);

        left !== null && dfs(left, nextDepth, res);
        right !== null && dfs(right, nextDepth, res);
    }
};
