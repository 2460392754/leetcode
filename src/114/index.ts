/*
 * @Author: 费陶勇
 * @Date: 2021-12-22 23:49:34
 * @LastEditTime: 2021-12-22 23:49:40
 * @LastEditors: your name
 * @Description:https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/submissions/
 * @FilePath: /leetcode/src/114/index.ts
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
     * 执行用时： 92 ms , 在所有 TypeScript 提交中击败了 36.04% 的用户
     * 内存消耗： 40.9 MB , 在所有 TypeScript 提交中击败了 47.75% 的用户
     * @param root
     * @returns
     */
    function flatten(root: TreeNode | null): TreeNode | null {
        // 处理空树
        if (root === null) {
            return null;
        }

        // 创建栈
        const stack: TreeNode[] = [];

        while (root.left !== null || root.right !== null || stack.length > 0) {
            // 让右子树入栈
            if (root.right !== null) {
                stack.push(root.right);
            }

            // 左子树不为空则，让左子树替代右子树
            if (root.left !== null) {
                root.right = root.left;
                root.left = null;
            }

            // 出栈，并让右子树追加栈数据，保持“直链”状态
            else {
                root.right = stack.pop();
            }

            root = root.right;
        }
    }
};
