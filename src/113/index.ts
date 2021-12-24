/*
 * @Author: 费陶勇
 * @Date: 2021-12-24 10:27:21
 * @LastEditTime: 2021-12-24 10:49:50
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/path-cacheSum-ii/submissions/
 * @FilePath: /leetcode/src/113/index.ts
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
     * 执行用时： 100 ms , 在所有 TypeScript 提交中击败了 19.83% 的用户
     * 内存消耗： 48.4 MB , 在所有 TypeScript 提交中击败了 19.01% 的用户
     * @param root
     * @param targetSum
     * @returns
     */
    function pathSum(root: TreeNode | null, targetSum: number): number[][] {
        // 处理空树
        if (root === null) {
            return [];
        }

        const resNumList: number[][] = [];

        dfs(root, [], 0, targetSum, resNumList);

        return resNumList;
    }

    function dfs(
        node: TreeNode,
        cacheList: number[],
        cacheSum: number,
        targetSum: number,
        resNumList: number[][]
    ) {
        // 缓存节点值
        cacheList.push(node.val);

        // 缓存技术路径总和
        cacheSum += node.val;

        // 叶子节点并且路径总和相等
        if (node.left === null && node.right === null && cacheSum === targetSum) {
            resNumList.push(cacheList);
            return;
        }

        // 处理非空子树，并且让 cacheList 脱离引用关系
        node.left !== null && dfs(node.left, [...cacheList], cacheSum, targetSum, resNumList);
        node.right !== null && dfs(node.right, [...cacheList], cacheSum, targetSum, resNumList);
    }
};

() => {
    /**
     * 迭代法(BFS)
     * 执行用时： 96 ms , 在所有 TypeScript 提交中击败了 38.84% 的用户
     * 内存消耗： 44.8 MB , 在所有 TypeScript 提交中击败了 44.63% 的用户
     * @param root
     * @param targetSum
     * @returns
     */
    function pathSum(root: TreeNode | null, targetSum: number): number[][] {
        // 处理空树
        if (root === null) {
            return [];
        }

        // 返回值
        const resNumList: number[][] = [];

        // 创建队列, (节点，路径缓存列表，缓存路径总和)
        const queue: [TreeNode, number[], number][] = [[root, [], 0]];

        while (queue.length > 0) {
            const [node, cacheList, sum] = queue.shift();
            const newSum = node.val + sum;

            cacheList.push(node.val);

            // 叶子节点并且路径总和相等
            if (newSum === targetSum && node.left === null && node.right === null) {
                resNumList.push(cacheList);
            }

            // 处理非空子树
            node.left !== null && queue.push([node.left, [...cacheList], newSum]);
            node.right !== null && queue.push([node.right, [...cacheList], newSum]);
        }

        return resNumList;
    }
};
