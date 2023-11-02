/**
 * 使用 javascript 编写脚本，从数据：[{ type: 'text', name: 'projectName', title: '项目名称' }] 中提取 name 和 title, 形成 array, 
 * 最后把array 转为csv 格式， 第一行为 title， 第二行为 name
 * 
 * @author chat-gpt
 * @since 2023年11月2日19:43:16
 */

let data = [{
    type: 'text',
    name: 'projectName',
    title: '项目名称'
}];

let titles = [];
let names = [];

data.forEach(item => {
    titles.push(item.title);
    names.push(item.name);
});

let csvContent = titles.join(",") + "\n" + names.join(",");

console.log(csvContent);
