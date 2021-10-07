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
  {
    path:'/pathway',
    name:'pathway',
    component: () => import('../views/pathway.vue')
    
  },
  {
    path:'/levent/:id',
    name:'Leventdetail',
    component: () => import('../views/Leventdetail.vue')
    
  },
  {
    path:'/lnews/:id',
    name:'Lnewsdetail',
    component: () => import('../views/Lnewsdetail.vue')
    
  },
  {
    path:'/course',
    name:'coursedetail',
    component: () => import('../views/coursedetail.vue')
    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass:"active"
})

export default router
