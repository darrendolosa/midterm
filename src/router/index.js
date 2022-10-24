import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import About from '../views/About.vue'
import Programming from '../views/Programming.vue'
import Selfone from '../views/Selfone.vue'
import Selftwo from '../views/Selftwo.vue'
import Labfour from '../views/Labfour.vue'
import Axios from '../views/Axios.vue'
import Quiz from '../views/quiz.vue'
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [

  {
    path: '/quiz',
    name: 'quiz',
    component: Quiz
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/programming',
    name: 'programming',
    component: Programming
  },
  {
    path: '/selfone',
    name: 'selfone',
    component: Selfone
  },
  {
    path: '/labfour',
    name: 'labfour',
    component: Labfour
  },
  {
    path: '/selftwo',
    name: 'selftwo',
    component: Selftwo
  },

  {
    path: '/axios',
    name: 'axios',
    component: Axios
  }

  ]

})

export default router
