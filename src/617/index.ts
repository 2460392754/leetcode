/*
 * @Author: 费陶勇
 * @Date: 2021-12-07 09:29:16
 * @LastEditTime: 2021-12-07 10:01:41
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/merge-two-binary-trees/submissions/
 * @FilePath: /leetcode/src/617/index.ts
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
     * 递归法
     * 执行用时： 104 ms , 在所有 TypeScript 提交中击败了 90.07% 的用户
     * 内存消耗： 45.6 MB , 在所有 TypeScript 提交中击败了 93.62% 的用户
     * @param root1
     * @param root2
     * @returns
     */
    function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
        // 跳过空数据合并
        if (root1 === null && root2 === null) {
            return null;
        }

        // 跳过空数据合并
        if (root1 === null || root2 === null) {
            return root1 || root2;
        }

        // 累加 根节点数据
        root1.val += root2.val;

        recursionMerge(root1, root2);

        return root1;
    }

    /**
     * 递归合并 (DFS)
     * root2数据合并到root1上
     * @param root1
     * @param root2
     */
    function recursionMerge(root1: TreeNode, root2: TreeNode): void {
        // 处理左子树合并，跳过 源对象root2左子树数据为空
        if (root2.left !== null) {
            // 若目标对象root1左子树数据为空，则直接 拷贝源对象root2的左子树
            if (root1.left === null) {
                root1.left = root2.left;
            }

            // 累加 左子树数据，并进行递归处理
            else {
                root1.left.val += root2.left.val;

                recursionMerge(root1.left, root2.left);
            }
        }

        // 处理右子树合并，跳过 源对象root2右子树数据为空
        if (root2.right !== null) {
            // 若目标对象root1右子树数据为空，则直接 拷贝源对象root2的右子树
            if (root1.right === null) {
                root1.right = root2.right;
            }

            // 累加 右子树数据，并进行递归处理
            else {
                root1.right.val += root2.right.val;

                recursionMerge(root1.right, root2.right);
            }
        }
    }
};

() => {
    /**
     * 迭代法 (BFS)
     * 执行用时： 104 ms , 在所有 TypeScript 提交中击败了 90.07% 的用户
     * 内存消耗： 46.2 MB , 在所有 TypeScript 提交中击败了 5.68% 的用户
     * @param root1
     * @param root2
     * @returns
     */
    function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
        // 跳过空数据合并
        if (root1 === null && root2 === null) {
            return null;
        }

        // 跳过空数据合并
        if (root1 === null || root2 === null) {
            return root1 || root2;
        }

        // 创建队列
        const queue = [[root1, root2]];

        // 遍历队列，知道清空
        while (queue.length) {
            const [lRoot, rRoot] = queue.shift();
            const { left: l1, right: r1 } = lRoot;
            const { left: l2, right: r2 } = rRoot;

            // 累加
            if (lRoot && rRoot) {
                lRoot.val += rRoot.val;
            }

            // 目标节点和源节点同时存在，则进行下一层的遍历处理
            if (l1 && l2) {
                queue.push([l1, l2]);
            }

            // 目标节点数据不存在，源节点数据存在，则进行数据拷贝
            else if (!l1 && l2) {
                lRoot.left = l2;
            }

            if (r1 && r2) {
                queue.push([r1, r2]);
            } else if (!r1 && r2) {
                lRoot.right = r2;
            }
        }

        return root1;
    }
};
