import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Aufträge from '../views/Aufträge.vue'
import News from '../views/News.vue'
import News2 from '../views/News2.vue'
import News3 from '../views/News3.vue'
import News4 from '../views/News4.vue'
import News5 from '../views/News5.vue'
import News6 from '../views/News6.vue'
import News7 from '../views/News7.vue'
import News8 from '../views/News8.vue'
import News9 from '../views/News9.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/aufträge',
    name: 'Aufträge',
    component: Aufträge
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/news2',
    name: 'News2',
    component: News2
  },
  {
    path: '/news3',
    name: 'News3',
    component: News3
  },
  {
    path: '/news4',
    name: 'News4',
    component: News4
  },
  {
    path: '/news5',
    name: 'News5',
    component: News5
  },
  {
    path: '/news6',
    name: 'News6',
    component: News6
  },
  {
    path: '/news7',
    name: 'News7',
    component: News7
  },
  {
    path: '/news8',
    name: 'News8',
    component: News8
  },
  {
    path: '/news9',
    name: 'News9',
    component: News9
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
