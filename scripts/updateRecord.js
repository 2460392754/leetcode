const FS = require('fs')
const Inquirer = require('inquirer');

const difficulty = ['简单', '中等', '困难'];

Inquirer.prompt([
    {
        type: 'input',
        name: 'id',
        message: 'Leetcode Topic ID:'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Leetcode Topic Name:'
    },
    {
        type: 'list',
        name: 'difficulty',
        message: 'Leetcode Topic Difficulty:',
        choices: difficulty
    },
]).then(res => {
    console.log(res)
    new Main(res.id, res.name, res.difficulty)
}).catch(err => {
    console.error(err)
})

class Main {
    // readme.md info
    filePath = './README.md';
    content = '';

    // leetcode topic info
    id = ''
    name = ''
    difficulty = ''

    // 
    day = 0

    constructor(id, name, difficulty) {
        try {
            this.id = id;
            this.name = name;
            this.difficulty = difficulty

            this.content = FS.readFileSync(this.filePath).toString()
            this.addRecord()
            this.updateRecordDayCount()
            this.updateDifficultyCount()
            FS.writeFileSync(this.filePath, this.content)
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * 更新打卡天数
     * @returns 
     */
    updateRecordDayCount() {
        this.content = this.content.replace(/已连续打卡 `\d+` 天/, n => {
            this.day = parseInt(n.match(/\d+/)[0]) + 1;

            return '已连续打卡 `' + this.day + '` 天'
        })
    }

    /**
     * 更新难度类型数量
     */
    updateDifficultyCount() {
        difficulty.forEach(type => {
            const regCount = new RegExp(`\\[${type}\\]`, 'g')
            const regUpdate = new RegExp(`${type}: \`\\d+\` 题 ,占 \`\\d+%\``)
            const count = (this.content.match(regCount) || {}).length || 0
            const percentage = Number(String(String(count / this.day) * 100).substr(0, 5)) + '%'

            this.content = this.content.replace(regUpdate, txt => {
                txt = txt.replace(/`\d+` 题/, `\`${count}\` 题`);
                txt = txt.replace(/占 `\d+%`/, `占 \`${percentage}\``);

                console.log(percentage, this.day, txt)

                return txt;
            })
        })
    }

    /**
     * 添加记录
     * @returns 
     */
    addRecord() {
        const txt = this.getRecordTemplate()
        const [matchBlock, appendTitle] = this.getMatchBlock();
        let updateTxt = '';

        if (appendTitle) {
            updateTxt = matchBlock.replace(/\n/, () => {
                return `\n\n${txt}`
            })
        } else {
            updateTxt = matchBlock.replace(/\)\n\n/, () => {
                return `)\n${txt}\n\n`
            })
        }

        this.content = this.content.replace(matchBlock, updateTxt)
    }

    /**
     * 获取 时间
     * @returns 
     */
    getDate() {
        const date = new Date();
        const Y = date.getFullYear();
        const M = String(date.getUTCMonth() + 1).padStart(2, '0');
        const D = String(date.getUTCDate()).padStart(2, '0');

        return { Y, M, D }
    }

    /**
     * 获取标题
     * @returns 
     */
    getTitle() {
        const { Y, M } = this.getDate()
        const title = `## ${Y}.${M}`

        return title;
    }

    /**
     * 设置新标题
     */
    setTitle() {
        this.content = this.content.replace(/##(\s|\S)+/, txt => {
            return `${this.getTitle()}\n\n\n` + txt
        })
    }

    /**
     * 获取 正则匹配块
     * @param {boolean} appendTitle
     * @returns 
     */
    getMatchBlock(appendTitle = false) {
        const reg = new RegExp(`(${this.getTitle()})(\n\n)((\\s|\\S)+)\n\n`)
        const matchBlock = this.content.match(reg);

        if (matchBlock === null) {
            this.setTitle();
            return this.getMatchBlock(true)
        } else {
            return [matchBlock[0], appendTitle];
        }
    }


    /**
     * 添加记录模版
     * @returns 
     */
    getRecordTemplate() {
        const { Y, M, D } = this.getDate()
        const txt = `-   [${Y}.${M}.${D} - ${this.id}.${this.name} - [${this.difficulty}]](./src/${this.id}/index.ts)`

        return txt;
    }
}
