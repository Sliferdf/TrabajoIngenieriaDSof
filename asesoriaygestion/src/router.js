import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import login from '@/components/Login'
import buscar from '@/components/Buscar'
import forms from '@/views/forms/forms'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/buscar',
      name: 'buscar',
      component: buscar
    },
{ 
          path: '/forms',
            name: 'forms',
            component: forms
          },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})