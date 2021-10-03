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
    component: () => import('../views/About.vue')
  },
  {
    path:'/courses',
    name:'Courses',
    component: () => import('../views/Courses.vue')
    
  },
  {
    path:'/studyWithUs',
    name:'Study',
    component: () => import('../views/Study.vue')
    
  },

  {
    path:'/career',
    name:'Career',
    component: () => import('../views/Career.vue')
    
  },
  {
    path:'/register',
    name:'Register',
    component: () => import('../views/Register.vue')
    
  },
  {
    path:'/help',
    name:'Help',
    component: () => import('../views/Help.vue')
    
  },
  {
    path:'/announcement',
    name:'Announcement',
    component: () => import('../views/Announcement.vue')
    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass:"active"
})

export default router
