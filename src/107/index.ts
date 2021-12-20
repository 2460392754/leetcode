/*
 * @Author: 费陶勇
 * @Date: 2021-12-20 23:26:46
 * @LastEditTime: 2021-12-21 00:03:21
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
 * @FilePath: /leetcode/src/107/index.ts
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
     * 迭代法(BFS)
     * 执行用时： 88 ms , 在所有 TypeScript 提交中击败了 17.86% 的用户
     * 内存消耗： 40 MB , 在所有 TypeScript 提交中击败了 21.43% 的用户
     * @param root
     * @returns
     */
    function levelOrderBottom(root: TreeNode | null): number[][] {
        // 跳过空树
        if (root === null) {
            return [];
        }

        // 入队
        const queue: [TreeNode, number][] = [[root, 0]];
        const res: number[][] = [];

        // 遍历队列
        while (queue.length > 0) {
            // 出队
            const [node, depth] = queue.shift();

            // 格式预处理
            if (res[depth] === undefined) {
                res[depth] = [];
            }

            res[depth].push(node.val);

            // 处理非空子树
            node.left !== null && queue.push([node.left, depth + 1]);
            node.right !== null && queue.push([node.right, depth + 1]);
        }

        return res.reverse();
    }
};

() => {
    /**
     * 迭代法(BFS)
     * 利用js的对象是引用关系处理数据关联
     * 执行用时： 92 ms , 在所有 TypeScript 提交中击败了 8.93% 的用户
     * 内存消耗： 40.3 MB , 在所有 TypeScript 提交中击败了 5.36% 的用户
     * @param root
     * @returns
     */
    function levelOrderBottom(root: TreeNode | null): number[][] {
        // 跳过空树
        if (root === null) {
            return [];
        }

        // 入队
        const queue: [TreeNode, number][] = [[root, 0]];

        // 返回值
        const res: number[][] = [];

        // 绑定二叉树的深度
        const map: Map<number, number[]> = new Map();

        // 遍历队列
        while (queue.length > 0) {
            // 出队
            const [node, depth] = queue.shift();

            // 格式预处理
            if (res[depth] === undefined) {
                const arr: number[] = [];

                res.push(arr);
                map.set(depth, arr);
            }

            map.get(depth).push(node.val);

            node.left !== null && queue.push([node.left, depth + 1]);
            node.right !== null && queue.push([node.right, depth + 1]);
        }

        return res.reverse();
    }
};

() => {
    /**
     * 递归法(DFS)
     * 执行用时： 92 ms , 在所有 TypeScript 提交中击败了 8.93% 的用户
     * 内存消耗： 40.2 MB , 在所有 TypeScript 提交中击败了 5.36% 的用户
     * @param root
     * @returns
     */
    function levelOrderBottom(root: TreeNode | null): number[][] {
        // 跳过空树
        if (root === null) {
            return [];
        }

        // 返回值
        const res: number[][] = [[]];

        dfs(root, res, 0);

        return res.reverse();
    }

    function dfs(node: TreeNode, res: number[][], depth: number) {
        const nextDepth = depth + 1;

        res[depth].push(node.val);

        // 数据结构预处理
        if ((node.left !== null || node.right !== null) && res[nextDepth] === undefined) {
            res[nextDepth] = [];
        }

        // 处理非空子树
        node.left !== null && dfs(node.left, res, nextDepth);
        node.right !== null && dfs(node.right, res, nextDepth);
    }
};
