/*
 * @Author: 费陶勇
 * @Date: 2022-01-04 22:45:59
 * @LastEditTime: 2022-01-04 22:56:11
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
 * @FilePath: /leetcode/src/429/index.ts
 */

class Node {
    val: number;
    children: Node[];
    constructor(val?: number) {
        this.val = val === undefined ? 0 : val;
        this.children = [];
    }
}

() => {
    /**
     * BFS
     * 执行用时： 104 ms , 在所有 TypeScript 提交中击败了 33.33% 的用户
     * 内存消耗： 42.7 MB , 在所有 TypeScript 提交中击败了 77.78% 的用户
     * @param root
     * @returns
     */
    function levelOrder(root: Node | null): number[][] {
        if (root === null) {
            return [];
        }

        const queue: Node[] = [root];
        const res: number[][] = [];
        let cacheQueue: Node[] = [];
        let depth = 0;

        // 层序遍历
        while (queue.length > 0) {
            // 结构初始化
            if (typeof res[depth] === 'undefined') {
                res[depth] = [];
            }

            const node = queue.shift();

            cacheQueue.push(...node.children);
            res[depth].push(node.val);

            // 当前层遍历结束，进入下一层
            if (queue.length === 0) {
                queue.push(...cacheQueue);
                cacheQueue = [];
                depth++;
            }
        }

        return res;
    }
};

() => {
    /**
     * DFS
     * 执行用时： 132 ms , 在所有 TypeScript 提交中击败了 8.89% 的用户
     * 内存消耗： 45.2 MB , 在所有 TypeScript 提交中击败了 13.33% 的用户
     * @param root
     * @returns
     */
    function levelOrder(root: Node | null): number[][] {
        function dfs(node: Node | null, depth: number) {
            // 处理空节点
            if (node === null) {
                return;
            }

            // 结构初始化
            if (typeof res[depth] === 'undefined') {
                res[depth] = [];
            }

            res[depth].push(node.val);

            node.children.forEach((childNode) => {
                dfs(childNode, depth + 1);
            });
        }

        const res: number[][] = [];

        dfs(root, 0);

        return res;
    }
};
