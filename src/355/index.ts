/*
 * @Author: 费陶勇
 * @Date: 2022-01-19 10:01:55
 * @LastEditTime: 2022-01-19 10:03:58
 * @LastEditors: your name
 * @Description: https://leetcode-cn.com/problems/design-twitter/
 * @FilePath: /leetcode/src/355/index.ts
 */

() => {
    /**
     * 执行用时： 76 ms , 在所有 TypeScript 提交中击败了 62.50% 的用户
     * 内存消耗： 39.4 MB , 在所有 TypeScript 提交中击败了 87.50% 的用户
     */
    class Twitter {
        // 文章关联(用户id，文章id)
        private _tweetList: [number, number][] = [];

        // 用户关联(用户id，关联的用户id)
        private _followList: Map<number, number[] | undefined> = new Map();

        postTweet(userId: number, tweetId: number): void {
            // 自动关联到用户关联对象中
            !this._followList.has(userId) && this._followList.set(userId, [userId]);

            // 文章入栈
            this._tweetList.unshift([userId, tweetId]);
        }

        getNewsFeed(userId: number): number[] {
            const userIdList = this._followList.get(userId);
            const tweetIdList: number[] = [];

            for (const [_userId, _tweetId] of this._tweetList) {
                if (userIdList.includes(_userId)) {
                    tweetIdList.push(_tweetId);
                }

                // 最多展示10条文章
                if (tweetIdList.length === 10) {
                    return tweetIdList;
                }
            }

            return tweetIdList;
        }

        follow(followerId: number, followeeId: number): void {
            const userIdList = this._followList.get(followerId);

            // 新用户关注(关注自己+其他用户)
            if (userIdList === undefined) {
                this._followList.set(followerId, [followerId, followeeId]);
            }

            // 去重关注
            else {
                !userIdList.includes(followeeId) && userIdList.push(followeeId);
                this._followList.set(followerId, userIdList);
            }
        }

        unfollow(followerId: number, followeeId: number): void {
            const userIdList = this._followList.get(followerId);
            const i = userIdList.indexOf(followeeId);

            // 处理取关边界
            i !== -1 && userIdList.splice(i, 1);
            this._followList.set(followerId, userIdList);
        }
    }
};
