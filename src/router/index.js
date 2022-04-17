import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
//Components
Vue.use(VueRouter)

const routes = [
	{
		name : 'login',
		path : '/login',
		component : () => import(/* webpackChunkName: "login" */ '@/pages/LoginUser'),
		meta : {
			requiresVisitor : true
		}
	},	
	{
		name : 'users',
		path : '/users',
		component : () => import(/* webpackChunkName: "users" */ '@/pages/AllUsers'),
		meta : {
			requiresAuth : true
		}
	},
]

const router = new VueRouter({
	base : '/',
	routes,
	mode : 'history'
})

//Protecting routes
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLoggedIn){
      next({
        name : 'login'
      })
    } else {
      next()
    }
  }else if (to.matched.some(record => record.meta.requiresVisitor)) {
    // this route requires visitor, check if not logged in
    // if not, redirect to login page.
    if (store.getters.isLoggedIn){
      next({
        name : 'home'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

router.onError(error => {
  if (/loading chunk \d* failed./i.test(error.message)) {
    window.location.reload()
  }
})

export default router