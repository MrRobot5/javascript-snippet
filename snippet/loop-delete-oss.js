// ==UserScript==
// @name         OSS 循环删除脚本
// @namespace    http://tampermonkey.net/
// @version      2024-02-05
// @description  try to take over the world!
// @author       You
// @match        https://oss.foo.com/bucket/mams-web/list
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jd.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    console.log("setTimeout...")
    setTimeout(function () {
        // 选择所有具有 objkey 属性的 <a> 元素
        $('a[objkey]').each(function () {
            // 获取当前元素的 objkey 属性值
            var objkey = $(this).attr('objkey');

            // 发送 POST 请求
            $.post('https://oss.foo.com/bucket/mams-web/delobj', { objkey: objkey }, function (response) {
                // 处理响应
                console.log('Response for objkey ' + objkey + ':', response);
            });
        });
    }, 1500);

    setTimeout(function () {
        // To refresh the current page using jQuery
        $(location).attr('href', window.location.href);
    }, 3000);

})();