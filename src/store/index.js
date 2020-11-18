import { createStore } from 'vuex'
import auth from './auth'
import apartment from './apartment'
import customer from './customer'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    apartment,
    customer
  }
})
