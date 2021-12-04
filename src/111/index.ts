/*
 * @Author: 费陶勇
 * @Date: 2021-12-04 10:43:42
 * @LastEditTime: 2021-12-04 11:23:37
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 * @FilePath: /leetcode/src/111/index.ts
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
     * DFS算法
     * 执行用时： 248 ms , 在所有 TypeScript 提交中击败了 28.25% 的用户
     * 内存消耗： 72.6 MB , 在所有 TypeScript 提交中击败了 51.12% 的用户
     * @param root
     * @returns
     */
    function minDepth(root: TreeNode | null): number {
        // 根节点为null
        if (root === null) {
            return 0;
        }

        // 当没有左子节点或右子节点时，就为叶子节点
        if (root.left === null && root.right === null) {
            return 1;
        }

        // 对左子节点剪枝
        if (root.left !== null && root.right === null) {
            return minDepth(root.left) + 1;
        }

        // 对右子节点剪枝
        if (root.left === null && root.right !== null) {
            return minDepth(root.right) + 1;
        }

        // 都存在，则对左右子节点都进行剪枝
        return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    }
};

() => {
    /**
     * BFS算法
     * 执行用时： 220 ms , 在所有 TypeScript 提交中击败了 80.27% 的用户
     * 内存消耗： 71.7 MB , 在所有 TypeScript 提交中击败了 85.20% 的用户
     * @param root
     * @returns
     */
    function minDepth(root: TreeNode | null): number {
        // 初始根节点为null，没有节点路径
        if (root === null) {
            return 0;
        }

        // 创建队列，根节点入队
        const queue: TreeNode[] = [root];

        // root为非null，则初始化最小深度为1
        let depth = 1;

        // 遍历队列，直到清空
        while (queue.length) {
            for (let i = 0, len = queue.length; i < len; i++) {
                // 出列，获取队列中的第一个数据
                const curRoot = queue.shift();

                // 若为叶子结点，则返回当前的深度
                if (curRoot.left === null && curRoot.right === null) {
                    return depth;
                }

                // 左子节点不为空，则入队
                if (curRoot.left !== null) {
                    queue.push(curRoot.left);
                }

                // 右子节点不为空，则入队
                if (curRoot.right !== null) {
                    queue.push(curRoot.right);
                }
            }

            // 深度增加，处理下一层深度结点
            depth++;
        }
    }
};
