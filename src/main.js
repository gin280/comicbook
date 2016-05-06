import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerConfig from './router'
import App from './App'

// Router
Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: true,
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})

routerConfig(router)

// fastclick
const FastClick = require('fastclick')
FastClick.attach(document.body)

// Resource
Vue.use(VueResource)

router.start(App, '#app')
