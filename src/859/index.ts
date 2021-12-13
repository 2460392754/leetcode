/*
 * @Author: 费陶勇
 * @Date: 2021-12-14 02:22:49
 * @LastEditTime: 2021-12-14 02:23:07
 * @LastEditors: your name
 * @Description:https://leetcode-cn.com/problems/buddy-strings/
 * @FilePath: /leetcode/src/859/index.ts
 */
() => {
    function buddyStrings(s: string, goal: string): boolean {
        let index: number;
        let map = Object.create(null);
        let flag = false;
        for (let i = 0; i < goal.length; i++) {
            if (s[i] !== goal[i]) {
                if (index === undefined) {
                    index = i;
                } else {
                    let x = s[index],
                        y = s[i];
                    let str =
                        s.substring(0, index) +
                        y +
                        s.substring(index + 1, i) +
                        x +
                        s.substring(i + 1);
                    if (str === goal) return true;
                    else return false;
                }
            } else if (!flag) {
                map[s[i]] ? map[s[i]]++ : (map[s[i]] = 1);
                if (map[s[i]] >= 2) flag = true;
            }
        }
        return flag && index === undefined;
    }
};
