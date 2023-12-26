
/**
 * 比对内容
 * prompt: 比对内容，找出内容块1 括号中的字符串，与内容块2中一致的。 
 *      内容块1：
 *      XXX（AA-01-BJB-A1494）
 *      内容块1：
 *      AA-01-BJB-A1494
 * @author chat-gpt
 * @since 2023年12月26日 14:00:38
 */

// 内容块1中的字符串数组
const contentBlock1 = [
    "笔记本电脑（AA-01-BJB-A1494）",
    "会议桌（AA-02-HYZ-A0020）",
    "显示器（AA-XSQ-B01869）",
    "电视机（AA-DSJ-B0741）"
];

// 内容块2中的字符串数组
const contentBlock2 = [
    "AA-01-BJB-A1494",
    "AA-01-BJB-B01869"
];

// 提取内容块1中括号内的字符串并查找匹配项
function findMatches(block1, block2) {
    const block1Codes = block1.map(item => {
        const start = item.indexOf('（') + 1;
        const end = item.indexOf('）');
        return item.substring(start, end);
    });

    const matches = block1Codes.filter(code => block2.includes(code));
    return matches;
}

// 正则表达式匹配括号内的内容
// 这个正则表达式匹配的是两个中文括号（）之间的所有字符，并将这些字符作为一个捕获组返回。
// [^）]+：一个字符集，^表示非，）表示右括号。这个字符集匹配任何不是右括号的字符。+表示匹配一个或多个这样的字符。
const regex = /（([^）]+)）/;

// 提取内容块1中括号内的字符串并查找匹配项
// 这段代码使用了正则表达式/（([^）]+)）/来匹配括号内的内容。match[1]将会返回第一个捕获组，即括号内的字符串。
function findMatchesWithRegex(block1, block2) {
    const block1Codes = block1.map(item => {
        const match = item.match(regex);
        return match ? match[1] : null;
    });

    const matches = block1Codes.filter(code => code && block2.includes(code));
    return matches;
}

// 使用函数并打印结果
const matches = findMatches(contentBlock1, contentBlock2);
console.log("匹配的字符串：", matches);
