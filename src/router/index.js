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

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/appointment/list',
    name: 'AppointmentList',
    component: AppointmentList
  },
  {
    path: '/appointment/create',
    name: 'AppointmentCreate',
    component: AppointmentCreate
  },
  {
    path: '/appointment/update',
    name: 'AppointmentUpdate',
    component: AppointmentUpdate
  },
  {
    path: '/apartment/list',
    name: 'ApartmentList',
    component: ApartmentList
  },
  {
    path: '/apartment/create',
    name: 'ApartmentCreate',
    component: ApartmentCreate
  },
  {
    path: '/apartment/update',
    name: 'ApartmentUpdate',
    component: ApartmentUpdate
  },
  {
    path: '/customer/list',
    name: 'CustomerList',
    component: CustomerList
  },
  {
    path: '/customer/create',
    name: 'CustomerCreate',
    component: CustomerCreate
  },
  {
    path: '/customer/update',
    name: 'CustomerUpdate',
    component: CustomerUpdate
  },
  {
    path: '/signin',
    name: 'Signin',
    component: SignIn,
    meta: {
      signInLayout: true,
    },
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignUp,
    meta: {
      signUpLayout: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
