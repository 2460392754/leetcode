/*
 * @Author: 费陶勇
 * @Date: 2022-01-28 16:18:59
 * @LastEditTime: 2022-01-28 16:32:55
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/design-linked-list/
 * @FilePath: /leetcode/src/707/index.ts
 */

() => {
    /**
     * 执行用时： 120 ms , 在所有 TypeScript 提交中击败了 95.35% 的用户
     * 内存消耗： 49.7 MB , 在所有 TypeScript 提交中击败了 5.81% 的用户
     */
    class MyLinkedList {
        private _head: ListNode = null;
        private _size: number = 0;

        get(index: number): number {
            // 处理边界
            if (index > this._size - 1) {
                return -1;
            }

            let tempHead = this._head;
            let i = 0;

            while (tempHead !== null) {
                // 命中成功
                if (i === index) {
                    return tempHead.val;
                }

                tempHead = tempHead.next;
                i++;
            }
        }

        addAtHead(val: number): void {
            this._head = new ListNode(val, this._head);
            this._size++;
        }

        addAtTail(val: number, index: number | undefined): void {
            if (this._head === null) {
                this.addAtHead(val);
                return;
            }

            let tempHead = this._head;
            let i = 0;
            this._size++;

            while (tempHead !== null) {
                // 添加尾部或对应的索引位置
                if (tempHead.next === null || i === index - 1) {
                    tempHead.next = new ListNode(val, tempHead.next);

                    return;
                }

                tempHead = tempHead.next;
                i++;
            }
        }

        addAtIndex(index: number, val: number): void {
            // 添加到头部
            if (index <= 0) {
                this.addAtHead(val);
            }

            // 处理对应索引
            else if (index <= this._size) {
                this.addAtTail(val, index);
            }
        }

        deleteAtIndex(index: number): void {
            // 删除不存在的索引
            if (index < 0 || index > this._size) {
                return;
            }

            // 删除链头
            if (index === 0) {
                this._size--;
                this._head = this._head.next;
                return;
            }

            let i = 0;
            let tempHead = this._head;

            while (tempHead !== null) {
                // 命中
                if (i + 1 === index) {
                    // 非空节点
                    if (tempHead.next !== null) {
                        tempHead.next = tempHead.next.next;
                        this._size--;
                    }
                }

                tempHead = tempHead.next;
                i++;
            }
        }
    }
};
