import Vue from 'vue'
import VueRouter from 'vue-router'
import { constantRoutes } from './constantRoutes'; // 静态路由
Vue.use(VueRouter)

const router = new VueRouter({
  routes: constantRoutes
})

export default router

export { constantRoutes } from './constantRoutes'; // 静态路由
export { asyncRoutes } from './asyncRoutes'; // 动态路由
