/**
 * prompt: 使用 JavaScript ， 实现把json 数组按照 appCode 字段 group
 * 
 * @author chat-gpt
 * @since 2023年11月3日17:07:50
 */
let data = [
    {appCode: 'code1', other: 'data1'},
    {appCode: 'code2', other: 'data2'},
    {appCode: 'code1', other: 'data3'},
    {appCode: 'code2', other: 'data4'},
    // 更多数据...
];

// 在这个示例中，reduce 方法遍历 data 中的每个元素，并将它们按照 appCode 字段分组。
// 结果是一个对象，其键是 appCode 的值，对应的值是具有相同 appCode 的对象数组。
let groupedByAppCode = data.reduce((result, currentItem) => {
    (result[currentItem.appCode] = result[currentItem.appCode] || []).push(currentItem);
    return result;
}, {});

console.log(groupedByAppCode);
