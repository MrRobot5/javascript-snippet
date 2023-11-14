/**
 * 场景：线上数据查询页面，宽列数据不好看。类似 oracle， 单条数据行转列显示。
 * prompt：操作html table, 把table 的header 和行，转为列展示
 * 
 * 使用 JavaScript 来实现HTML表格的行转为列，你可以通过创建一个新的表格并交换行和列的数据来实现。以下是一个简单的例子：
 * 
 * @author chat-gpt
 * @since 2023年11月14日17:16:39
 */
function transposeTable(originalTable) {
    var newTable = document.createElement('table');
    var rows = originalTable.rows;
    var rowCount = rows.length;
    var cellCount = rows[0].cells.length;

    for (var i = 0; i < cellCount; i++) {
        var newRow = newTable.insertRow(-1);
        for (var j = 0; j < rowCount; j++) {
            var newCell = newRow.insertCell(-1);
            newCell.textContent = rows[j].cells[i].textContent;
        }
    }

    originalTable.parentNode.replaceChild(newTable, originalTable);
}

// http://tampermonkey.net/ 配合油猴使用，更加方便
// 选择你要转置的表格
var table = document.querySelector('table');  
transposeTable(table);

