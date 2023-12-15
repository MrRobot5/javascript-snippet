/**
 * prompt：使用javascript 从html 页面遍历一个表格的所有行，从第一列中提取并打印符合域名格式的文本。 
 * 
 * @author chat-gpt
 * @since 2023年11月30日15:17:02
 */

// 假设你的表格有一个ID为'myTable'
var table = document.getElementsByClassName('table2')[0];

// 获取所有的行
var rows = table.getElementsByTagName('tr');

// 遍历每一行
for (var i = 0; i < rows.length; i++) {
    // 获取第一列的单元格
    var firstCell = rows[i].cells[0];
    
    // 获取单元格中的文本内容
    // textContent和innerText是两种获取元素文本内容的属性，这里使用逻辑或||来确保兼容不同的浏览器。
    var text = firstCell.textContent || firstCell.innerText;
    
    // 使用正则表达式匹配域名
    var domainMatch = text.match(/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g);
    
    // 如果匹配到域名，打印或处理域名信息
    if (domainMatch) {
        console.log(domainMatch[0]); // 输出第一个匹配的域名
    }
}