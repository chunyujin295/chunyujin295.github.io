/*
 * @Author: chunyujin 3029795434@qq.com
 * @Date: 2023-01-19 16:56:24
 * @LastEditors: chunyujin 3029795434@qq.com
 * @LastEditTime: 2023-01-19 16:56:31
 * @FilePath: /MyWeb/themes/butterfly/source/js/title.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = '👀跑哪里去了';
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = '欢迎回来😋';
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});