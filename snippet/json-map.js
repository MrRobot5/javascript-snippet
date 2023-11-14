/**
 * 使用 javascript 把 json 数组格式的数据，格式化为空格连接的字符串。数组对象的key 和value 连接一起
 * 
 * @author chat-gpt
 * @since 2023年11月13日14:12:29
 */
let data = [
    {
        "id": null,
        "value": "已做",
        "key": "1"
    },
    {
        "id": null,
        "value": "计划做",
        "key": "2"
    },
    {
        "id": null,
        "value": "不做",
        "key": "3"
    }
];

// 这段代码首先使用map()方法将每个对象转换为一个字符串，这个字符串是对象的"key"字段和"value"字段连接起来的。然后，使用join(' ')方法将这些字符串用空格连接起来。
let result = data.map(obj => obj.key + obj.value).join(' ');

// 输出: "1已做 2计划做 3不做"
console.log(result);  
