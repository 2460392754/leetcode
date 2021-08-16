(() => {
    /**
     * 暴力计算
     * 执行用时： 112 ms , 在所有 TypeScript 提交中击败了 25.15% 的用户
     * 内存消耗： 39.7 MB , 在所有 TypeScript 提交中击败了 39.26% 的用户
     * @param x
     * @returns
     */
    function mySqrt(x: number): number {
        let i = 1;

        while (true) {
            const pow = i * i;

            // 刚好相等
            if (pow === x) {
                return i;
            }

            // 当i的平方大于n时,获取i-1的平方数据并舍去小数部分
            if (pow > x) {
                return i - 1;
            }

            i++;
        }
    }
})();

(() => {
    /**
     * 双指针
     * 执行用时： 180 ms , 在所有 TypeScript 提交中击败了 5.52% 的用户
     * 内存消耗： 39.5 MB , 在所有 TypeScript 提交中击败了 77.91% 的用户
     * @param x
     * @returns
     */
    function mySqrt(x: number): number {
        if (x === 0 || x === 1) return x;

        let left = 1;
        let right = x;

        while (left <= right) {
            const lPow = left * left;
            const rPow = right * right;

            if (lPow === x) {
                return left;
            }

            if (rPow === x) {
                return right;
            }

            if (lPow < x && (left + 1) * (left + 1) > x) {
                return left;
            }

            if (rPow > x && (right - 1) * (right - 1) < x) {
                return right - 1;
            }

            if (lPow < x) {
                left++;
                continue;
            }

            if (rPow > x) {
                right--;
                continue;
            }
        }

        return 0;
    }
})();
