/*
 * @Author: 费陶勇
 * @Date: 2021-12-29 09:51:39
 * @LastEditTime: 2021-12-29 09:55:27
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/
 * @FilePath: /leetcode/src/701/index.ts
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
     * 执行用时： 136 ms , 在所有 TypeScript 提交中击败了 13.46% 的用户
     * 内存消耗： 46.9 MB , 在所有 TypeScript 提交中击败了 5.77% 的用户
     * @param root
     * @param val
     * @returns
     */
    function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
        // 处理边界
        if (root === null) {
            return {
                val,
                left: null,
                right: null
            };
        }

        // 创建队列，（结构：节点，最小值，最大值）
        const queue: [TreeNode, number, number][] = [[root, -Infinity, Infinity]];

        while (queue.length > 0) {
            const [node, min, max] = queue.shift();

            // 递归左子树
            if (node.left !== null) {
                queue.push([node.left, min, node.val]);
            } else {
                // 左子树为空，且填入的val值符合当前所在二叉搜索树的规则，则进行插入
                if (val > min && val < node.val) {
                    node.left = {
                        val,
                        left: null,
                        right: null
                    };
                }
            }

            // 递归右子树
            if (node.right !== null) {
                queue.push([node.right, node.val, max]);
            } else {
                // 右子树为空，且填入的val值符合当前所在二叉搜索树的规则，则进行插入
                if (val > node.val && val < max) {
                    node.right = {
                        val,
                        left: null,
                        right: null
                    };
                }
            }
        }

        return root;
    }
};
