// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router/index'

// 引入组件
import Operation from './components/Operation'

// 引入插件
import ElementUI from 'element-ui'
import 'bootstrap/dist/css/bootstrap.css'
import 'element-ui/lib/theme-chalk/index.css'

// 全局使用插件
Vue.use(ElementUI)
// 去掉警告
Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

new Vue({
  el: '#app',
  router,
  template: '<Operation/>',
  components: { Operation }
})
