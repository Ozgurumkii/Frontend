import axios from 'axios'
import store from '.'

export default {
  namespaced: true,
  state: {
      appointments: []
  },
  getters: {
    appointmentList(state){
        return state.appointments
    }
  },
  mutations: {
    SET_APPOINTMENTS(state, appointments){
        state.appointments = appointments
    },
    SET_APPOINTMENT(state, appointment){
        state.appointments.push(appointment)
    },
    UPDATE_APPOINTMENT(state, appointment){
        let index = state.appointments.findIndex(a => a.id == appointment.id)
        if(index > -1){
            state.appointments[index] = appointment
        }
    },
    DELETE_APPOINTMENT(state, appointmentId){
        let index = state.appointments.findIndex(a => a.id == appointmentId)
        if(index > -1){
            state.appointments.splice(index, 1)
        }
    }
  },
  actions: {
      async appointmentList(){
          let response = await axios.get('appointments?token='+store.getters['auth/authenticated']);
          return response.data
      },

      async createAppointment({ commit }, appointment){
          let response = await axios.post('appointments?token='+store.getters['auth/authenticated'], appointment)
          commit('SET_APPOINTMENT', response.data)
          return response.status
      },

      async updateAppointment({ commit }, appointment){
          let response = await axios.put('appointments/'+appointment.id+'/?token='+store.getters['auth/authenticated'], appointment)
          commit('UPDATE_APPOINTMENT', appointment)
          return response.status
      },

      async deleteAppointment({ commit }, appointmentId){
          let response = await axios.delete('apartments/'+appointmentId+'?token='+store.getters['auth/authenticated'])
          commit('DELETE_APPOINTMENT', appointmentId)
          return response.status
      },

      /* methods */

      async distance(_, postcode){
        let response = await axios.get('distance/'+postcode)
        return response.data.rows[0].elements[0].duration
      }
  }
}
