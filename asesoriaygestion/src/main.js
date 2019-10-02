import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import * as firebase from "firebase";       
import VueFirebase from 'vue-firebase';

// Config firebase project
const firebaseConfig = {
  apiKey: "AIzaSyA9iNcxUs8OynOfP8MgnAA22l5Symr83rY",
  authDomain: "logiinvue.firebaseapp.com",
  databaseURL: "https://logiinvue.firebaseio.com",
  projectId: "logiinvue",
  storageBucket: "logiinvue.appspot.com",
  messagingSenderId: "28025408729",
  appId: "1:28025408729:web:00c924f378d799864182c8"
};

Vue.use(VueFirebase, {firebase: firebase, config: firebaseConfig});

Vue.config.productionTip = false

import AlertIcon from 'vue-ionicons/dist/ios-alert.vue'

Vue.component('alert-icon', AlertIcon)

import AllIosIcon from 'vue-ionicons/dist/ionicons-ios.js'
 
Vue.use(AllIosIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
