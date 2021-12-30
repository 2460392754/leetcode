/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
    // 处理空树
    if (root === null) {
        return null;
    }

    const queue = [root];
    let cacheQueue: Node[] = [];
    let i = 0;
    let nextNode: Node = root;

    while (queue.length > 0) {
        const node = queue.shift();

        node.left !== null && cacheQueue.push(node.left);
        node.right !== null && cacheQueue.push(node.right);
        nextNode = node;

        if (queue.length === 0) {
            node.next = null;
            queue.push(...cacheQueue);
            cacheQueue = [];
            i = 0;
        } else {
            i !== 0 && (node.next = nextNode);
        }

        i++;
    }

    return root;
}
