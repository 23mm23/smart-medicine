import Vue from 'vue';
import axios from "axios";
import App from './App.vue'
import './registerServiceWorker'
import plugins from './plugins'
import router from './router'
import store from './store'
import echarts from './assets/js/echarts.min.js'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(plugins, {
    host: `http://${window.location.hostname}:8081/`,
});

import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)

new Vue({
  router,
  store,
  echarts,
  render: h => h(App)
}).$mount('#app')
