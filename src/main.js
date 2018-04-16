// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import './assets/js/rem.js'
import './assets/css/reset.css'

Vue.config.productionTip = false

let cookie={
  add:function(key, value, timers) {
    var timer = new Date();
    timer.setDate(timer.getDate() + timers);
    var str = key + "=" + value + ";expires=" + timer.toUTCString();
    document.cookie = str;
  },
  delete:function(key) {
    var timer = new Date();
    timer.setDate(timer.getDate() - 1);
    document.cookie = key + "=null;expires=" + timer.toUTCString();
  },
  search:function(key) {
    var arr = document.cookie.split(";");
    for (var i = 0; i < arr.length; i++) {
      if (key === arr[i].trim().split("=")[0]) {
        return arr[i].trim().split("=")[1];
      }
    }
  },
  update:function(key, value) {
    document.cookie = key + "=" + value;
  },
}
global.API_PROXY = 'https://bird.ioliu.cn/v2/?url='
global.cookie=cookie;
global.tomydata=false;
global.username='';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  
})
