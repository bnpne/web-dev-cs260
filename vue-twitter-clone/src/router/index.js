import Vue from 'vue'
import VueRouter from 'vue-router'
import Create from '../views/Create.vue'
import Timeline from '../views/Timeline.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/Create',
    name: 'create',
    component: Create
  },
  {
    path: '/',
    name: 'timeline',
    component: Timeline
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
