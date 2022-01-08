/*
 * @Author: 费陶勇
 * @Date: 2022-01-08 13:38:57
 * @LastEditTime: 2022-01-08 13:44:02
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/add-one-row-to-tree/submissions/
 * @FilePath: /leetcode/src/623/index.ts
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
     * 执行用时： 104 ms , 在所有 TypeScript 提交中击败了 85.71% 的用户
     * 内存消耗： 46.2 MB , 在所有 TypeScript 提交中击败了 14.29% 的用户
     * @param root
     * @param val
     * @param depth
     * @returns
     */
    function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
        // 处理空树
        if (root === null) {
            return null;
        }

        // 处理边界
        if (depth === 1) {
            root = new TreeNode(val, root, null);
        }

        // 创建队列（树，深度）
        const queue: [TreeNode, number][] = [[root, 1]];

        // 层序遍历
        while (queue.length > 0) {
            for (let i = 0, len = queue.length; i < len; i++) {
                const [node, curDepth] = queue.shift();

                // 匹配条件
                if (curDepth + 1 === depth) {
                    node.left = new TreeNode(val, node.left, null);
                    node.right = new TreeNode(val, null, node.right);

                    break;
                }

                node.left !== null && queue.push([node.left, curDepth + 1]);
                node.right !== null && queue.push([node.right, curDepth + 1]);
            }
        }

        return root;
    }
};
