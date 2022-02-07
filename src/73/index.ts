/*
 * @Author: 费陶勇
 * @Date: 2022-02-08 03:34:11
 * @LastEditTime: 2022-02-08 03:37:40
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/set-matrix-zeroes/
 * @FilePath: /leetcode/src/73/index.ts
 */

() => {
    /**
     * 执行用时： 76 ms , 在所有 TypeScript 提交中击败了 97.96% 的用户
     * 内存消耗： 44 MB , 在所有 TypeScript 提交中击败了 17.35% 的用户
     * @param matrix
     */
    function setZeroes(matrix: number[][]): void {
        const x: Set<number> = new Set(),
            y: Set<number> = new Set(),
            iLen = matrix.length,
            jlen = matrix[0].length;

        for (let i = 0; i < iLen; i++) {
            for (let j = 0; j < jlen; j++) {
                if (matrix[i][j] === 0) {
                    x.add(i);
                    y.add(j);
                }
            }
        }

        for (let i = 0; i < iLen; i++) {
            for (let j = 0; j < jlen; j++) {
                if (x.has(i) || y.has(j)) {
                    matrix[i][j] = 0;
                }
            }
        }
    }
};
