/*
 * @Author: 费陶勇
 * @Date: 2022-01-16 22:10:06
 * @LastEditTime: 2022-01-16 22:10:25
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/even-odd-tree/
 * @FilePath: /leetcode/src/1609/index.ts
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
     * 执行用时： 256 ms , 在所有 TypeScript 提交中击败了 60.00% 的用户
     * 内存消耗： 74.3 MB , 在所有 TypeScript 提交中击败了 87.00% 的用户
     * @param root
     * @returns
     */
    function isEvenOddTree(root: TreeNode | null): boolean {
        if (root === null) {
            return null;
        }

        const queue: TreeNode[] = [root];
        let depth = 0;
        let n = -Infinity;

        while (queue.length > 0) {
            for (let i = 0, len = queue.length; i < len; i++) {
                const { val, left, right } = queue.shift();

                if (depth % 2 === 0) {
                    if (n >= val || val % 2 === 0) return false;
                } else {
                    if (n <= val || val % 2 !== 0) return false;
                }

                n = val;

                left !== null && queue.push(left);
                right !== null && queue.push(right);
            }

            depth++;
            n = depth % 2 === 0 ? -Infinity : Infinity;
        }

        return true;
    }
};
