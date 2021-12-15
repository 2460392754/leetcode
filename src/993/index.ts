/*
 * @Author: 费陶勇
 * @Date: 2021-12-16 02:33:18
 * @LastEditTime: 2021-12-16 02:33:20
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/cousins-in-binary-tree/submissions/
 * @FilePath: /leetcode/src/993/index.ts
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
     * dfs
     * 执行用时： 76 ms , 在所有 TypeScript 提交中击败了 76.19% 的用户
     * 内存消耗： 39.7 MB , 在所有 TypeScript 提交中击败了 76.19% 的用户
     * @param root
     * @param x
     * @param y
     * @returns
     */
    function isCousins(root: TreeNode | null, x: number, y: number): boolean {
        const map = new Map<number, number[]>();

        dfs(root, x, y, map);

        const xMap = map.get(x);
        const yMap = map.get(y);

        return xMap[0] === yMap[0] && xMap[1] !== yMap[1];
    }

    function dfs(
        node: TreeNode | null,
        x: number,
        y: number,
        map: Map<number, number[]>,
        depth: number = 0,
        parentNodeVal: number = 0
    ) {
        // 处理空树
        if (node === null) {
            return;
        }

        // 寻找对应的节点树
        if (map.has(x) && map.has(y)) {
            return;
        }

        map.set(node.val, [depth, parentNodeVal]);

        dfs(node.left, x, y, map, depth + 1, node.val);
        dfs(node.right, x, y, map, depth + 1, node.val);
    }
};
