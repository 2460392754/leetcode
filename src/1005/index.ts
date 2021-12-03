/*
 * @Author: 费陶勇
 * @Date: 2021-12-03 10:09:34
 * @LastEditTime: 2021-12-03 11:11:42
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/maximize-sum-of-array-after-k-negations/submissions/
 * @FilePath: /leetcode/src/1005/index.ts
 */
() => {
    /**
     * 执行用时： 84 ms , 在所有 TypeScript 提交中击败了 43.48% 的用户
     * 内存消耗： 39.6 MB , 在所有 TypeScript 提交中击败了 69.57% 的用户
     * @param nums
     * @param k
     * @returns
     */
    function largestSumAfterKNegations(nums: number[], k: number): number {
        // 生序排序
        nums.sort((a, b) => a - b);

        for (let i = 0, len = nums.length; i < len; i++) {
            // 负数数据进行反转
            if (nums[i] < 0) {
                nums[i] *= -1;
                k--;
            }

            // k 为 0 ，结束反转
            if (k === 0) {
                break;
            }
        }

        // 求和
        const sum = nums.reduce((a, b) => a + b);

        // k和nums.length刚好相等，结果k为0，不进行反转
        // k 为偶数，反转不改变原数据
        if (k === 0 || k % 2 === 0) {
            return sum;
        }

        // 获取 最小数进行反转
        const min = Math.min(...nums);

        // 减去最小值并求和
        return sum - 2 * min;
    }
};

() => {
    /**
     * 贪心算法
     * 执行用时： 88 ms , 在所有 TypeScript 提交中击败了 30.43% 的用户
     * 内存消耗： 39.5 MB , 在所有 TypeScript 提交中击败了 73.91% 的用户
     * @param nums
     * @param k
     */
    function largestSumAfterKNegations(nums: number[], k: number): number {
        // 生序排序
        handleSort(nums);

        // 获取 负数数量
        const negativeNumsIndex = getNegativeNumsIndex(nums);

        // 都为正数
        if (negativeNumsIndex === 0) {
            // 反转最小数
            if ((k - negativeNumsIndex) % 2 !== 0) {
                handleMin(nums, 0);
            }

            return handleSum(nums);
        }

        // 负数数量大于等于k，则只反转k次数据
        else if (negativeNumsIndex >= k) {
            for (let i = 0; i < k; i++) {
                handleMin(nums, i);
            }

            return handleSum(nums);
        }

        // 负数数量小于k，则先反转k次数据，再升序排序，最后处理k为奇数的情况
        else {
            for (let i = 0; i < negativeNumsIndex; i++) {
                handleMin(nums, i);
            }

            handleSort(nums);

            // 反转最小数
            if ((k - negativeNumsIndex) % 2 !== 0) {
                handleMin(nums, 0);
            }

            return handleSum(nums);
        }
    }

    /**
     * 获取 负数数量
     * @param nums
     * @returns
     */
    function getNegativeNumsIndex(nums: number[]): number {
        const len = nums.length;

        for (let i = 0; i < len; i++) {
            if (nums[i] >= 0) {
                return i;
            }
        }

        return len;
    }

    /**
     * 升序排序
     * @param nums
     */
    function handleSort(nums: number[]): void {
        nums.sort((a, b) => a - b);
    }

    /**
     * 反转最小数
     * @param nums
     * @param i
     */
    function handleMin(nums: number[], i: number): void {
        nums[i] *= -1;
    }

    /**
     * 求和
     * @param nums
     * @returns
     */
    function handleSum(nums: number[]): number {
        return nums.reduce((a, b) => a + b);
    }
};
