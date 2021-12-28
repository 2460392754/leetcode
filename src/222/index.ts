/*
 * @Author: 费陶勇
 * @Date: 2021-12-28 09:50:14
 * @LastEditTime: 2021-12-28 10:15:31
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/count-complete-tree-nodes/
 * @FilePath: /leetcode/src/222/index.ts
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
     * BFS，统计树的高度和树的最深层的节点数据进行求和
     * 执行用时： 436 ms , 在所有 TypeScript 提交中击败了 5.49% 的用户
     * 内存消耗： 56.6 MB , 在所有 TypeScript 提交中击败了 35.16% 的用户
     * @param root
     * @returns
     */
    function countNodes(root: TreeNode | null): number {
        // 处理空树
        if (root === null) {
            return 0;
        }

        // 处理边界
        if (root.left === null) {
            return 1;
        }

        const queue: TreeNode[] = [root];
        let cacheQueue: TreeNode[] = [];
        let depth = 0;
        let i = 0;
        let isDoneEach = false;

        // 总节点数量（根树值）
        let sum = 1;

        while (queue.length > 0) {
            const node = queue.shift();

            // 层序遍历的第一个节点的左子树为叶子结点，则代码下一层就是当前树的最后一层（最深处）
            if (!isDoneEach && i === 0 && node.left.left === null) {
                isDoneEach = true;
            }

            // 非空子树追加到暂存队列中，并自增当前层序的下表位置
            node.left !== null && cacheQueue.push(node.left);
            node.right !== null && cacheQueue.push(node.right);
            i++;

            // 判断遍历状态，进行下一层的层序遍历
            if (queue.length === 0 && !isDoneEach) {
                queue.push(...cacheQueue);
                cacheQueue = [];
                i = 0;
                depth++;
            }
        }

        // 非首尾的节点计算
        for (let i = 1; i <= depth; i++) {
            sum += Math.pow(2, i);
        }

        // 层序遍历最深度的节点数量
        sum += cacheQueue.length;

        return sum;
    }
};

() => {
    /**
     * DFS
     * 执行用时： 88 ms , 在所有 TypeScript 提交中击败了 95.60% 的用户
     * 内存消耗： 56.8 MB , 在所有 TypeScript 提交中击败了 7.69% 的用户
     * @param root
     * @returns
     */
    function countNodes(root: TreeNode | null): number {
        let lNode = root,
            rNode = root,
            lH = 0,
            rH = 0;

        // 递归计算左子树高度
        while (lNode !== null) {
            lNode = lNode.left;
            lH++;
        }

        // 递归计算右子树高度
        while (rNode !== null) {
            rNode = rNode.right;
            rH++;
        }

        // 若当前树的最左和最右树的高度相等，则代表树是满二叉树或空树或没有左右子树
        if (lH === rH) {
            return Math.pow(2, lH) - 1;
        }

        // 递归计算这颗完全二叉树的高度,
        // 起始树根 + 起始树的左子树的值 + 起始树的右子树的值
        return 1 + countNodes(root.left) + countNodes(root.right);
    }
};
