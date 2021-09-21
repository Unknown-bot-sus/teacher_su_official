import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/courses',
    name:'Courses',
    component: () => import(/* webpackChunkName: "about" */ '../views/Courses.vue')
    
  },
  {
    path:'/studyWithUs',
    name:'Study',
    component: () => import(/* webpackChunkName: "about" */ '../views/Study.vue')
    
  },

  {
    path:'/career',
    name:'Career',
    component: () => import(/* webpackChunkName: "about" */ '../views/Career.vue')
    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass:"active"
})

export default router
