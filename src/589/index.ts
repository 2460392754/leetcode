/*
 * @Author: 费陶勇
 * @Date: 2022-01-02 18:57:57
 * @LastEditTime: 2022-01-02 19:14:05
 * @LastEditors: your name
 * @Description:
 * @FilePath: /leetcode/src/589/index.ts
 */

class Node {
    val: number;
    children: Node[];
    constructor(val?: number) {
        this.val = val === undefined ? 0 : val;
        this.children = [];
    }
}

() => {
    /**
     * BFS
     * 执行用时： 92 ms , 在所有 TypeScript 提交中击败了 68.25% 的用户
     * 内存消耗： 43.4 MB , 在所有 TypeScript 提交中击败了 30.16% 的用户
     * @param root
     * @returns
     */
    function preorder(root: Node | null): number[] {
        // 处理空树
        if (root === null) {
            return [];
        }

        const queue: Node[] = [root];
        const res: number[] = [];

        // 迭代队列
        while (queue.length > 0) {
            const node = queue.shift();

            // 追加节点值
            res.push(node.val);

            // 头部追加数据
            queue.unshift(...node.children);
        }

        return res;
    }
};
