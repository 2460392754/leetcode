/*
 * @Author: 费陶勇
 * @Date: 2022-01-05 23:08:36
 * @LastEditTime: 2022-01-05 23:12:54
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/maximum-width-of-binary-tree/
 * @FilePath: /leetcode/src/662/index.ts
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
     * 执行用时： 84 ms , 在所有 TypeScript 提交中击败了 86.96% 的用户
     * 内存消耗： 42.4 MB , 在所有 TypeScript 提交中击败了 100.00% 的用户
     */
    function widthOfBinaryTree(root: TreeNode | null): number {
        const queue: [TreeNode, number][] = [[root, 0]];
        let max = 1;

        while (queue.length) {
            // 当前层的宽度起始站
            const cur = queue[0][1];

            // 层序遍历
            for (let i = 0, len = queue.length; i < len; i++) {
                const [node, pos] = queue.shift();
                //  宽差
                const n = 2 * (pos - cur);

                node.left !== null && queue.push([node.left, n]);
                node.right !== null && queue.push([node.right, n + 1]);

                max = Math.max(max, pos - cur + 1);
            }
        }

        return max;
    }
};
