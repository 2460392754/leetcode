/*
 * @Author: 费陶勇
 * @Date: 2021-12-18 02:14:39
 * @LastEditTime: 2021-12-18 02:15:15
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/print-binary-tree/
 * @FilePath: /leetcode/src/655/index.ts
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
     * 递归法（DFS）
     * 第一步：遍历二叉树，转成二维数组
     * 第二步：填充空字符占位
     * 第三步：填充二叉数据
     * 执行用时： 64 ms , 在所有 TypeScript 提交中击败了 100.00% 的用户
     * 内存消耗： 39.4 MB , 在所有 TypeScript 提交中击败了 100.00% 的用户
     * @param root
     * @returns
     */
    function printTree(root: TreeNode | null): string[][] {
        // 处理空树
        if (root === null) {
            return [[]];
        }

        const treeNodeList: (number | null)[][] = [[]];
        const res: string[][] = [];

        // 获取最大深度
        const maxDepth = getMaxDepth(root);

        dfs(root, treeNodeList, maxDepth);

        // 删除 冗余数据
        treeNodeList.pop();

        const len = treeNodeList.length;

        // 倒序遍历二维数组（倒三角）
        for (let i = len - 1; i >= 0; i--) {
            let curDepth = len - 1 - i;
            res[i] = [];

            // 填充空字符
            for (let j = 0; j <= Math.pow(2, len - 1) * 2 - 1 - 1; j++) {
                res[i][j] = '';
            }

            // 填充二维数据
            for (let j = 0; j <= treeNodeList[i].length - 1; j++) {
                const curI = getIndex(curDepth, j);
                const val = treeNodeList[i][j];

                res[i][curI] = val === null ? '' : String(val);
            }
        }

        return res;
    }

    /**
     * 获取最大深度
     * @param node
     * @param depth
     * @returns
     */
    function getMaxDepth(node: TreeNode | null, depth = 0): number {
        if (node === null) {
            return depth;
        }

        return Math.max(getMaxDepth(node.left, depth + 1), getMaxDepth(node.right, depth + 1));
    }

    /**
     * 递归处理数据结构，树形数据 => 二维数组
     * @param node
     * @param list
     * @param maxDepth
     * @param depth
     */
    function dfs(
        node: TreeNode | null,
        list: (number | null)[][],
        maxDepth: number,
        depth: number = 0
    ) {
        // 空数据预处理
        if (typeof list[depth] === 'undefined') {
            list[depth] = [];
        }

        // 处理空数据
        list[depth].push(node === null ? null : node.val);

        // 确保不会应为左子树为空导致二维数组不添加左子树数据占位
        // [1,null,3] => [[1], [3]]
        // [1,2,3] => [[1]], [2,3]]
        if (depth + 1 <= maxDepth) {
            dfs(node === null ? null : node.left, list, maxDepth, depth + 1);
            dfs(node === null ? null : node.right, list, maxDepth, depth + 1);
        }
    }

    /**
     * 获取 二叉数值填充索引
     * @param depth 深度
     * @param i 索引
     * @returns
     */
    function getIndex(depth: number, i: number) {
        // 起始值
        const firstStart = depth > 0 ? Math.pow(2, depth) - 1 : 0;

        // 索引值
        const iStart = i > 0 ? Math.pow(2, depth + 1) * i : 0;

        return firstStart + iStart;
    }
};
