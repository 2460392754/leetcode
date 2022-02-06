/*
 * @Author: 费陶勇
 * @Date: 2022-02-06 23:36:44
 * @LastEditTime: 2022-02-06 23:43:43
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/valid-sudoku/
 * @FilePath: /leetcode/src/36/index.ts
 */

() => {
    /**
     * 数组
     * 执行用时： 76 ms , 在所有 TypeScript 提交中击败了 98.71% 的用户
     * 内存消耗： 45.7 MB , 在所有 TypeScript 提交中击败了 6.86% 的用户
     * @param board
     * @returns
     */
    function isValidSudoku(board: string[][]): boolean {
        // 横、竖、3x3块
        const list: string[][][] = [[], [], []];

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const val = board[i][j];
                const blockListIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                // 跳过空格
                if (val === '.') continue;

                // 初始化
                list[0][i] === undefined && (list[0][i] = []);
                list[1][j] === undefined && (list[1][j] = []);
                list[2][blockListIndex] === undefined && (list[2][blockListIndex] = []);

                // 判断重复(横、竖、3x3块)
                if (
                    list[0][i].includes(val) ||
                    list[1][j].includes(val) ||
                    list[2][blockListIndex].includes(val)
                ) {
                    return false;
                }

                list[0][i].push(val);
                list[1][j].push(val);
                list[2][blockListIndex].push(val);
            }
        }

        return true;
    }
};

() => {
    /**
     * 执行用时： 68 ms , 在所有 TypeScript 提交中击败了 100.00% 的用户
     * 内存消耗： 44.4 MB , 在所有 TypeScript 提交中击败了 12.87% 的用户
     * @param board
     * @returns
     */
    function isValidSudoku(board: string[][]): boolean {
        // 横、竖、3x3块
        const mapList: [Map<string, null>, Map<string, null>, Map<string, null>] = [
            new Map(),
            new Map(),
            new Map()
        ];

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const val = board[i][j];
                const blockListIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                // 跳过空格
                if (val === '.') continue;

                // 判断重复(横、竖、3x3块)
                if (
                    mapList[0].has(i + '-' + val) ||
                    mapList[1].has(j + '-' + val) ||
                    mapList[2].has(blockListIndex + '-' + val)
                ) {
                    return false;
                }

                mapList[0].set(i + '-' + val, null);
                mapList[1].set(j + '-' + val, null);
                mapList[2].set(blockListIndex + '-' + val, null);
            }
        }

        return true;
    }
};
