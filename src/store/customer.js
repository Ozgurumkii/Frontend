import axios from 'axios'
import store from '.'

export default {
  namespaced: true,
  state: {
      customers: []
  },
  getters: {
    apartmentList(state){
        return state.customers
    }
  },
  mutations: {
    SET_CUSTOMERS(state, customers){
        state.customers = customers
    },
    SET_CUSTOMER(state, customer){
        state.customers.push(customer)
    },
    UPDATE_CUSTOMER(state, customer){
        let index = state.customers.findIndex(c => c.id == customer.id)
        if(index > -1){
            state.apartments[index] = customer
        }
    },
    DELETE_CUSTOMER(state, customerId){
        let index = state.customers.findIndex(a => a.id == customerId)
        if(index > -1){
            state.customers.splice(index, 1)
        }
    }
  },
  actions: {
      async customerList(){
          let response = await axios.get('customers?token='+store.getters['auth/authenticated']);
          return response.data
      },

      async createCustomer({ commit }, customer){
          let response = await axios.post('customers?token='+store.getters['auth/authenticated'], customer)
          commit('SET_CUSTOMER', response.data)
          return response.status
      },

      async updateCustomer({ commit }, customer){
          let response = await axios.put('customers/'+customer.id+'/?token='+store.getters['auth/authenticated'], customer)
          commit('UPDATE_CUSTOMER', customer)
          return response.status
      },

      async deleteCustomer({ commit }, customerId){
          let response = await axios.delete('customers/'+customerId+'?token='+store.getters['auth/authenticated'])
          commit('DELETE_CUSTOMER', customerId)
          return response.status
      }
  }
}
