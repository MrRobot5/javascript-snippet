
/**
 * 内容提取
 * @author chat-gpt
 * @since 2023年12月15日15:15:53
 */

const text = "瑞恒通知维通知司，FA2312120002954，现通知号1350 为FA2312120002959。";
const regex = /FA\d+/g;
const matches = text.match(regex);

// 输出: ["FA2312120002954", "FA2312120002959"]
console.log(matches); 
