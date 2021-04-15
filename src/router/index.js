import Vue from 'vue'
import Router from 'vue-router'
import General from '../views/General.vue'
import Home from '../views/Home.vue'

Vue.use(Router);

const routes = [
  { 
    name: 'home',
    path: '/',
    component: Home, 
  },
  { 
    name: 'general',
    path: '/general',
    component: General, 
  }
];

const router = new Router({
  routes
})

export default router