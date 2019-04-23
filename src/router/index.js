import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import routes from './routes'

Vue.use(VueRouter)

//滚动条滚回顶部
const scrollBehavior = (to, from, savedPosition) => {
  return savedPosition || { x: 0, y: 0 }
}

let router = new VueRouter({
  mode: 'history',
  scrollBehavior,
  routes
})
// 路由钩子
router.beforeEach()

