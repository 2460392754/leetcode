/**
 * 进制转换
 * 执行用时： 68 ms , 在所有 TypeScript 提交中击败了 100.00% 的用户
 * 内存消耗： 39.8 MB , 在所有 TypeScript 提交中击败了 15.20% 的用户
 * @param columnTitle
 * @returns
 */
function titleToNumber(columnTitle: string): number {
    const arr = columnTitle.split('');
    const len = arr.length;
    let n = 0;

    for (let i = 0; i < len; i++) {
        const val = arr[i].charCodeAt(0) - 64;

        n = n * 26 + val;
    }

    return n;
}
