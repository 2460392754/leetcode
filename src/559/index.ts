/*
 * @Author: 费陶勇
 * @Date: 2022-01-01 13:31:20
 * @LastEditTime: 2022-01-01 13:43:22
 * @LastEditors: your name
 * @Description:
 * @FilePath: /leetcode/src/559/index.ts
 */

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

() => {
    /**
     * BFS
     * 执行用时： 92 ms , 在所有 TypeScript 提交中击败了 44.94% 的用户
     * 内存消耗： 42.7 MB , 在所有 TypeScript 提交中击败了 17.09% 的用户
     * @param root
     * @returns
     */
    function maxDepth(root: Node | null): number {
        // 处理空树
        if (root === null) {
            return 0;
        }

        // 队列（节点数，当前深度）
        const queue: [Node, number][] = [[root, 1]];
        let max = 1;

        while (queue.length > 0) {
            const [node, depth] = queue.shift();

            if (node.children.length !== 0) {
                node.children.forEach((childNode) => {
                    queue.push([childNode, depth + 1]);
                });
            } else {
                max = Math.max(max, depth);
            }
        }

        return max;
    }
};

() => {
    /**
     * DFS
     * 执行用时： 88 ms , 在所有 TypeScript 提交中击败了 63.92% 的用户
     * 内存消耗： 42.6 MB , 在所有 TypeScript 提交中击败了 17.09% 的用户
     * @param root
     * @returns
     */
    function maxDepth(root: Node | null): number {
        return dfs(root, 0);
    }

    /**
     *
     * @param node
     * @param depth
     * @returns
     */
    function dfs(node: Node, depth: number): number {
        if (node === null) return depth;

        depth++;
        const nextDepth = depth;

        for (const childNode of node.children) {
            depth = Math.max(depth, dfs(childNode, nextDepth));
        }

        return depth;
    }
};
