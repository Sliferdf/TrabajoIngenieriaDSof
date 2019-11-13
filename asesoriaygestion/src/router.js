import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import login from '@/components/Login'
import buscar from '@/components/Buscar'
import Plantilla from '@/components/Plantilla'
import Formulario from '@/views/Formulario'
import firebase from 'firebase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect : '/login'
    },

   {
     path: '/',
    redirect: 'login'
   },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/buscar',
      name: 'buscar',
      component: buscar
    },

    {
      path: '/ingreso',
      name: 'ingreso',
      component: Plantilla,
      meta: {
        autentificado: true
      }
    },

    {
      path: '/formulario',
      name: 'formulario',
      component: Formulario
    },
  ]
})
/*
router.beforeEach((to, from, next) => {
  let usuario = firebase.auth().currentUser;
  let autorizacion = to.matched.some(record => record.meta.autentificado);
  
  
  if (autorizacion && usuario) {
    next('imgreso')
  
  } else if (!autorizacion && usuario) {
    next('home');
 
  } else {
    next();
  }
})
*/