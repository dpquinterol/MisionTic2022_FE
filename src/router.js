import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

import LogIn from './components/LogIn.vue'
import SignUp from './components/SingUp.vue'
import Home from './components/Home.vue'
import RequestUser from './components/RequestUser.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  },  
  {
    path: '/user/logIn',
    name: 'logIn',
    component: LogIn
  },
  {
    path: '/user/signUp',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/user/Home',
    name: 'Home',
    component: Home
  },    
  {
    path: '/user/RequestUser',
    name: 'RequestUser',
    component: RequestUser
  }    
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
