import { createStore } from 'vuex'
import auth from './auth'
import apartment from './apartment'
import customer from './customer'
import appointment from './appointment'
import map from './map'

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
    customer,
    appointment,
    map
  }
})
