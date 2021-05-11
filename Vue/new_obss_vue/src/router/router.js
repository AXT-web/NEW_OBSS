import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Register from '../components/Register.vue'
import MyCar from '../components/MyCar.vue'
import PersonalCenter from '../components/PersonalCenter.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/myCar', component: MyCar },
    { path: '/personalCenter', component: PersonalCenter }
  ]
})

// 挂载路由导航守卫,to表示将要访问的路径，from表示从哪里来，next是下一个要做的操作
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login')
//     return next();

//   //获取token
//   const tokenStr = window.sessionStorage.getItem('token');

//   if (!tokenStr)
//     return next('/login');

//   next();

// })

export default router
