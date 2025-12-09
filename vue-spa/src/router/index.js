import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataView from '../views/DataView.vue'
import InfoView from '../views/InfoView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/data', name: 'data', component: DataView },
  { path: '/info', name: 'info', component: InfoView }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
