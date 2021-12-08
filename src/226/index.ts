/*
 * @Author: 费陶勇
 * @Date: 2021-12-08 09:29:59
 * @LastEditTime: 2021-12-08 09:42:31
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/invert-binary-tree/submissions/
 * @FilePath: /leetcode/src/226/index.ts
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
     * 迭代法 (BFS、前序遍历)
     * 执行用时： 76 ms , 在所有 TypeScript 提交中击败了 64.98% 的用户
     * 内存消耗： 39.6 MB , 在所有 TypeScript 提交中击败了 51.18% 的用户
     * @param root
     * @returns
     */
    function invertTree(root: TreeNode | null): TreeNode | null {
        // 跳过空树
        if (root === null) {
            return null;
        }

        // 创建队列
        const queue = [root];

        while (queue.length) {
            const curRoot = queue.shift();
            const temp = curRoot.left;

            // 左右子数对调
            curRoot.left = curRoot.right;
            curRoot.right = temp;

            // 跳过空节点处理
            if (curRoot.left !== null) {
                queue.push(curRoot.left);
            }

            // 跳过空节点处理
            if (curRoot.right !== null) {
                queue.push(curRoot.right);
            }
        }

        return root;
    }
};

() => {
    /**
     * 递归法(DFS)
     * 执行用时： 72 ms , 在所有 TypeScript 提交中击败了 86.20% 的用户
     * 内存消耗： 39.6 MB , 在所有 TypeScript 提交中击败了 35.35% 的用户
     * @param root
     * @returns
     */
    function invertTree(root: TreeNode | null): TreeNode | null {
        // 跳过空树
        if (root === null) {
            return root;
        }

        return {
            val: root.val,
            left: invertTree(root.right),
            right: invertTree(root.left)
        };
    }
};
