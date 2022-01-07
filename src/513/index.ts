/*
 * @Author: 费陶勇
 * @Date: 2022-01-07 09:36:15
 * @LastEditTime: 2022-01-07 09:38:04
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/find-bottom-left-tree-value/
 * @FilePath: /leetcode/src/513/index.ts
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
     * 执行用时： 88 ms , 在所有 TypeScript 提交中击败了 54.76% 的用户
     * 内存消耗： 43.2 MB , 在所有 TypeScript 提交中击败了 59.52% 的用户
     * @param root
     * @returns
     */
    function findBottomLeftValue(root: TreeNode | null): number {
        // 处理空树
        if (root === null) {
            return 0;
        }

        const queue: TreeNode[] = [root];
        let max = 0;

        // 层序遍历
        while (queue.length > 0) {
            for (let i = 0, len = queue.length; i < len; i++) {
                const node = queue.shift();

                // 重复赋值，获取每一层的第一个节点值
                i === 0 && (max = node.val);
                node.left !== null && queue.push(node.left);
                node.right !== null && queue.push(node.right);
            }
        }

        return max;
    }
};
