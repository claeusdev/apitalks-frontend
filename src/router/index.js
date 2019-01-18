import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Auth from '@/components/Auth'
import Home from '@/components/Home'
import StoreShow from '@/components/StoreShow'
import Contact from '@/components/Contact'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/store/:id',
      name: 'StoreShow',
      component: StoreShow,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
// Nav Guard
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
    next('/auth')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router
