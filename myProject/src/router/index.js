import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import TopNav from '@/pages/Home/TopNav/TopNav'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: "/",
      redirect: "/Home", //设置默认指向的路径
      name: "HomePage"
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/TopNav',
      name: 'TopNav',
      component: TopNav
    }
  ]
})
