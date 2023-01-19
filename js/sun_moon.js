/*
 * @Author: chunyujin 3029795434@qq.com
 * @Date: 2023-01-19 14:58:14
 * @LastEditors: chunyujin 3029795434@qq.com
 * @LastEditTime: 2023-01-19 14:58:24
 * @FilePath: /MyWeb/themes/butterfly/source/js/sun_moon.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function switchNightMode() {
    document.querySelector('body').insertAdjacentHTML('beforeend', '<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>'),
      setTimeout(function() {
        document.querySelector('body').classList.contains('DarkMode') ? (document.querySelector('body').classList.remove('DarkMode'), localStorage.setItem('isDark', '0'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-moon')) : (document.querySelector('body').classList.add('DarkMode'), localStorage.setItem('isDark', '1'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-sun')),
          setTimeout(function() {
            document.getElementsByClassName('Cuteen_DarkSky')[0].style.transition = 'opacity 3s';
            document.getElementsByClassName('Cuteen_DarkSky')[0].style.opacity = '0';
            setTimeout(function() {
              document.getElementsByClassName('Cuteen_DarkSky')[0].remove();
            }, 1e3);
          }, 2e3)
      })
    const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    if (nowMode === 'light') {
      activateDarkMode()
      saveToLocal.set('theme', 'dark', 2)
      GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
      document.getElementById('modeicon').setAttribute('xlink:href', '#icon-sun')
    } else {
      activateLightMode()
      saveToLocal.set('theme', 'light', 2)
      document.querySelector('body').classList.add('DarkMode'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-moon')
    }
    // handle some cases
    typeof utterancesTheme === 'function' && utterancesTheme()
    typeof FB === 'object' && window.loadFBComment()
    window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)
  }