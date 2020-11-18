import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AppointmentList from '../components/Appointment/List.vue'
import AppointmentCreate from '../components/Appointment/Create.vue'
import AppointmentUpdate from '../components/Appointment/Update.vue'
import ApartmentList from '../components/Apartment/List.vue'
import ApartmentCreate from '../components/Apartment/Create.vue'
import ApartmentUpdate from '../components/Apartment/Update.vue'
import CustomerList from '../components/Customer/List.vue'
import CustomerCreate from '../components/Customer/Create.vue'
import CustomerUpdate from '../components/Customer/Update.vue'

import SignIn from '../views/Signin.vue'
import SignUp from '../views/Signup.vue'

import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'Signin'
        })
      }

      next()
    }
  },
  {
    path: '/appointment/list',
    name: 'AppointmentList',
    component: AppointmentList,
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'Signin'
        })
      }
      
      next()
    }
  },
  {
    path: '/appointment/create',
    name: 'AppointmentCreate',
    component: AppointmentCreate,
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'Signin'
        })
      }
      
      next()
    }
  },
  {
    path: '/appointment/update',
    name: 'AppointmentUpdate',
    component: AppointmentUpdate,
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'Signin'
        })
      }
      
      next()
    }
  },
  {
    path: '/apartment/list',
    name: 'ApartmentList',
    component: ApartmentList,
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'Signin'
        })
      }
      
      next()
    }
  },
  {
    path: '/apartment/create',
    name: 'ApartmentCreate',
    component: ApartmentCreate,
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'Signin'
        })
      }
      
      next()
    }
  },
  {
    path: '/apartment/update',
    name: 'ApartmentUpdate',
    component: ApartmentUpdate,
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'Signin'
        })
      }
      
      next()
    }
  },
  {
    path: '/customer/list',
    name: 'CustomerList',
    component: CustomerList,
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'Signin'
        })
      }
      
      next()
    }
  },
  {
    path: '/customer/create',
    name: 'CustomerCreate',
    component: CustomerCreate,
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'Signin'
        })
      }
      
      next()
    }
  },
  {
    path: '/customer/update',
    name: 'CustomerUpdate',
    component: CustomerUpdate,
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'Signin'
        })
      }
      
      next()
    }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: SignIn,
    meta: {
      signInLayout: true,
    },
    beforeEnter: (to, from, next) => {
      if(store.getters['auth/authenticated']){
        return next({
          name: 'Home'
        })
      }
      
      next()
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignUp,
    meta: {
      signUpLayout: true,
    },
    beforeEnter: (to, from, next) => {
      if(store.getters['auth/authenticated']){
        return next({
          name: 'Home'
        })
      }
      
      next()
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
