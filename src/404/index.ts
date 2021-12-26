/*
 * @Author: 费陶勇
 * @Date: 2021-12-27 01:33:47
 * @LastEditTime: 2021-12-27 01:33:49
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/sum-of-left-leaves/
 * @FilePath: /leetcode/src/404/index.ts
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
     * @param root
     * @returns
     */
    function sumOfLeftLeaves(root: TreeNode | null): number {
        if (root === null) {
            return 0;
        }

        let sum = 0;
        const queue: [TreeNode, boolean][] = [[root, false]];

        while (queue.length > 0) {
            const [node, isLeft] = queue.shift();

            if (node.left === null && node.right === null && isLeft) {
                sum += node.val;
            }

            node.left !== null && queue.push([node.left, true]);
            node.right !== null && queue.push([node.right, false]);
        }

        return sum;
    }
};
