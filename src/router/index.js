import Vue from 'vue'
import VueRouter from 'vue-router'
import Carretera from '../views/Carretera.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Carretera',
    component: Carretera
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
