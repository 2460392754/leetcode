/*
 * @Author: 费陶勇
 * @Date: 2022-02-03 22:54:59
 * @LastEditTime: 2022-02-03 23:34:11
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * @FilePath: /leetcode/src/17/index.ts
 */

() => {
    /**
     * 执行用时： 60 ms , 在所有 TypeScript 提交中击败了 98.41% 的用户
     * 内存消耗： 42.3 MB , 在所有 TypeScript 提交中击败了 5.08% 的用户
     * @param digits
     * @returns
     */
    function letterCombinations(digits: string): string[] {
        if (digits === '') return [];

        const obj: { [key: string]: any } = {
            2: 'abc',
            3: 'def',
            4: 'ghi',
            5: 'jkl',
            6: 'mno',
            7: 'pqrs',
            8: 'tuv',
            9: 'wxyz'
        };
        const list = [...digits].map((s) => obj[s]);
        const res: string[] = [];

        function loop(s: string, i: number) {
            if (list[i] === undefined) {
                s.length !== 0 && res.push(s);
                return;
            }

            for (const k of list[i]) {
                loop(s + k, i + 1);
            }
        }

        loop('', 0);

        return res;
    }
};
