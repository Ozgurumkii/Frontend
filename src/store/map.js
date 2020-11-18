import axios from 'axios'

export default {
  namespaced: true,
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
      async getLatLong(_, postcode){
          let response = await axios.get('http://api.postcodes.io/postcodes/'+postcode)
          return response.data;
      }
  }
}
