import axios from 'axios'
import store from '.'

export default {
  namespaced: true,
  state: {
      apartments: []
  },
  getters: {
    apartmentList(state){
        return state.apartments
    }
  },
  mutations: {
    SET_APARTMENTS(state, apartments){
        state.apartments = apartments
    },
    SET_APARTMENT(state, apartment){
        state.apartments.push(apartment)
    },
    UPDATE_APARTMENT(state, apartment){
        let index = state.apartments.findIndex(a => a.id == apartment.id)
        if(index > -1){
            state.apartments[index] = apartment
        }
    },
    DELETE_APARTMENT(state, apartmentId){
        let index = state.apartments.findIndex(a => a.id == apartmentId)
        if(index > -1){
            state.apartments.splice(index, 1)
        }
    }
  },
  actions: {
      async getApartmentWithPostcode(_, postcode){
        let response = await axios.get('getapartment/'+postcode+'?token='+store.getters['auth/authenticated'])
        return response.data.apartment[0].id
      },

    async getAll(){
        let response = await axios.get('apartmentlist?token='+store.getters['auth/authenticated'])
        return response.data;
    },

      async apartmentList(){
          let response = await axios.get('apartments?token='+store.getters['auth/authenticated']);
          return response.data
      },

      async createApartment({ commit }, apartment){
          let response = await axios.post('apartments?token='+store.getters['auth/authenticated'], apartment)
          commit('SET_APARTMENT', response.data)
          return response.status
      },

      async updateApartment({ commit }, apartment){
          let response = await axios.put('apartments/'+apartment.id+'/?token='+store.getters['auth/authenticated'], apartment)
          commit('UPDATE_APARTMENT', apartment)
          return response.status
      },

      async deleteApartment({ commit }, apartmentId){
          let response = await axios.delete('apartments/'+apartmentId+'?token='+store.getters['auth/authenticated'])
          commit('DELETE_APARTMENT', apartmentId)
          return response.status
      }
  }
}
