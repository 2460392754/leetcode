/*
 * @Author: 费陶勇
 * @Date: 2021-12-30 10:09:46
 * @LastEditTime: 2021-12-30 16:44:30
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/
 * @FilePath: /leetcode/src/129/index.ts
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
     * 迭代法+层序遍历 （BFS）
     * 执行用时： 72 ms , 在所有 TypeScript 提交中击败了 85.71% 的用户
     * 内存消耗： 40.5 MB , 在所有 TypeScript 提交中击败了 5.10% 的用户
     * @param root
     * @returns
     */
    function sumNumbers(root: TreeNode | null): number {
        // 处理空树
        if (root === null) {
            return 0;
        }

        // 队列（树，节点值列表）
        const queue: [TreeNode, number[]][] = [[root, []]];

        // 待求和列表
        const waitSumList: number[][] = [];
        let sum = 0;

        // 层序遍历
        while (queue.length > 0) {
            const [node, sumList] = queue.shift();
            const newData: number[] = [...sumList];

            newData.push(node.val);

            // 若为叶子结点，则把当前路径所有的节点值追加到 待求和列表中
            if (node.left === null && node.right === null) {
                waitSumList.push(newData);
            }

            // 递归非空左右树
            node.left !== null && queue.push([node.left, newData]);
            node.right !== null && queue.push([node.right, newData]);
        }

        // 求和
        for (let i = 0; i < waitSumList.length; i++) {
            let tempSum = '';

            for (const n of waitSumList[i]) {
                tempSum += String(n);
            }

            sum += Number(tempSum);
        }

        return sum;
    }
};

() => {
    /**
     * 递归法 （DFS）
     * @param root
     * @returns
     */
    function sumNumbers(root: TreeNode | null): number {
        if (root === null) {
            return 0;
        }

        const waitSumList: number[] = [];

        dfs(root, '0', waitSumList);

        // 求和
        return waitSumList.reduce((pre, cur) => pre + cur);
    }

    function dfs(node: TreeNode, sum: string, waitSumList: number[]) {
        sum += String(node.val);

        // 叶子结点，结束遍历，并把当前路径结点总和的值追加到 待求和列表中
        if (node.left === null && node.right === null) {
            waitSumList.push(Number(sum));
        } else {
            node.left !== null && dfs(node.left, sum, waitSumList);
            node.right !== null && dfs(node.right, sum, waitSumList);
        }
    }
};
