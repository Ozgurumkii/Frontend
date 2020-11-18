import axios from 'axios'

export default {
  namespaced: true,
  state: {
      token: null,
      user: null
  },
  getters: {
      authenticated(state){
          return state.token
      }
  },
  mutations: {
      SET_TOKEN(state, token){
          state.token = token
      }
  },
  actions: {
      async signIn({ dispatch }, credentials){
        let response = await axios.post('login', credentials)
        return dispatch('attempt', response.data.token)
      },

      async attempt({ commit }, token){
          commit('SET_TOKEN', token)
      },

      signOut({ commit, state }){
        axios.defaults.headers.common['Authorization'] = null
          return axios.get('logout?token='+state.token).then(() => {
              commit('SET_TOKEN', null)
          })
      }
  }
}
