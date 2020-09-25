import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import container from './components/container'
import car from './components/car-list'

// vueRouter使用：1.安装vue-router包：npm  install vue-router --save
// 2.import导入 Router ，并VUe.use(Router)；3.导入路由模块，配置路由（定义路径，实例化路由，挂载路由）；4.路由使用（router-view）

Vue.config.productionTip = false
Vue.use(Router)

const routes = [
  {path:'/',component:container},
  {path:'/car',component:car}
]
const router = new Router({
  routes,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
