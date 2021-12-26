/*
 * @Author: 费陶勇
 * @Date: 2021-12-27 01:13:51
 * @LastEditTime: 2021-12-27 01:27:21
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/path-sum-iii/
 * @FilePath: /leetcode/src/437/index.ts
 */

() => {
    var pathSum = function (root, targetSum) {
        let map = new Map();
        let ans = 0;
        dfs(root, 0);
        return ans;
        /**
         *
         * @param {*} root
         * @param {*} presum 前缀和
         * @returns
         */
        function dfs(root, presum) {
            if (!root) {
                return 0;
            }
            map.set(presum, (map.get(presum) || 0) + 1);
            let target = presum + root.val;
            //   console.log(target-targetSum)
            ans += map.get(target - targetSum) || 0;
            //   console.log(map)
            // 继续找
            dfs(root.left, target);
            dfs(root.right, target);
            // 回溯 撤销
            map.set(presum, map.get(presum) - 1);
        }
    };
};
