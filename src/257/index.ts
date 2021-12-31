/*
 * @Author: 费陶勇
 * @Date: 2022-01-01 00:15:37
 * @LastEditTime: 2022-01-01 00:20:32
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/binary-tree-paths/
 * @FilePath: /leetcode/src/257/index.ts
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
     * 执行用时： 80 ms , 在所有 TypeScript 提交中击败了 55.29% 的用户
     * 内存消耗： 39.7 MB , 在所有 TypeScript 提交中击败了 43.53% 的用户
     * @param root
     * @returns
     */
    function binaryTreePaths(root: TreeNode | null): string[] {
        // 处理空树
        if (root === null) {
            return [];
        }

        const queue: [TreeNode, string][] = [[root, '']];
        const res: string[] = [];

        // 遍历队列
        while (queue.length > 0) {
            let [node, pathSum] = queue.shift();

            // 合计路径
            pathSum += (pathSum.length === 0 ? '' : '->') + node.val;

            // 遍历非空左右子树
            node.left !== null && queue.push([node.left, pathSum]);
            node.right !== null && queue.push([node.right, pathSum]);

            // 若为叶子结点则存储合计路径
            node.left === null && node.right === null && res.push(pathSum);
        }

        return res;
    }
};
