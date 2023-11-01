
/**
 * prompt 使用 javascript 实现一个脚本。 
 * 需求是：扫描页面中 table 的所有 tr， 对于3、4列（数据例如：09:32:55）进行时间处理，并计算小时差。如果大于8，则当前 tr 高亮显示。
 * 
 * @author chat-gpt
 * @since 2023年11月1日17:24:31
 */

// 获取所有的表格行
var rows = document.querySelectorAll('table tr');

// 遍历每一行
for (var i = 0; i < rows.length; i++) {
    // 获取第三和第四列
    var cell3 = rows[i].cells[2];
    var cell4 = rows[i].cells[3];

    // 如果这两列存在
    if (cell3 && cell4) {
        // 获取这两列的时间. 这个脚本假设你的表格中的时间是以"HH:MM:SS"的格式显示的。如果你的时间格式不同
        var time3 = new Date("1970-01-01 " + cell3.textContent);
        var time4 = new Date("1970-01-01 " + cell4.textContent);

        // 计算时间差（小时）
        var diff = Math.abs(time4 - time3) / 36e5;

        // 如果时间差大于8小时
        if (diff > 8) {
            // 高亮显示这一行
            rows[i].style.backgroundColor = 'yellow';
        }
    }
}
