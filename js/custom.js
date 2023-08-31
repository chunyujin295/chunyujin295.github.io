/*
 * @Author: chunyujin 3029795434@qq.com
 * @Date: 2022-12-31 10:57:28
 * @LastEditors: chunyujin 3029795434@qq.com
 * @LastEditTime: 2022-12-31 10:57:35
 * @FilePath: /MyWeb/themes/butterfly/source/js/custom.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
document.onkeydown = function (e) {
    if (123 == e.keyCode || (e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode)) || (e.ctrlKey && 85 === e.keyCode)) return btf.snackbarShow("你真坏，不能打开控制台喔!"), event.keyCode = 0, event.returnValue = !1, !1
};