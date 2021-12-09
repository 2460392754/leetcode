/*
 * @Author: 费陶勇
 * @Date: 2021-12-09 09:44:40
 * @LastEditTime: 2021-12-09 09:50:13
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/univalued-binary-tree/
 * @FilePath: /leetcode/src/965/index.ts
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
     * 递归法 (DFS)
     * 执行用时： 64 ms , 在所有 TypeScript 提交中击败了 100.00% 的用户
     * 内存消耗： 39.6 MB , 在所有 TypeScript 提交中击败了 23.08% 的用户
     * @param rootuuy
     * @returns
     */
    function isUnivalTree(root: TreeNode | null): boolean {
        return recursion(root, root.val);
    }

    function recursion(root: TreeNode | null, value: number): boolean {
        // 跳过 空树
        if (root === null) {
            return true;
        }

        // 比较 子数值与根数值是否相同
        if (root.val !== value) {
            return false;
        }

        return recursion(root.left, value) && recursion(root.right, value);
    }
};

() => {
    /**
     * 执行用时： 84 ms , 在所有 TypeScript 提交中击败了 53.85% 的用户
     * 内存消耗： 39.7 MB , 在所有 TypeScript 提交中击败了 7.69% 的用户
     * @param root
     * @returns
     */
    function isUnivalTree(root: TreeNode | null): boolean {
        // 处理 空树
        if (root === null) {
            return true;
        }

        // 创建队列，让 根节点入队
        const queue = [root];

        // 根节点值
        const rootVal = root.val;

        // 遍历清空队列
        while (queue.length) {
            const curRoot = queue.shift();

            if (curRoot.val !== rootVal) {
                return false;
            }

            curRoot.left !== null && queue.push(curRoot.left);
            curRoot.right !== null && queue.push(curRoot.right);
        }

        return true;
    }
};
