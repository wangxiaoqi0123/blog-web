import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 清除默认样式
import './styles/reset.css';

// 插件引入
import './plugins/element-ui';
// 时间插件
import './plugins/day';
// 全局公共组件
import './components/index';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
