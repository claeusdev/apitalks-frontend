import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './firebaseInit'

Vue.use(Vuex)
auth.onAuthStateChanged((user) => {
  if (user) {
    store.commit('setCurrentUser', user)
  }
})
export const store = new Vuex.Store({
  state: {
    currentUser: null
  },
  actions: {
    clearData ({ commit }) {
      commit('setCurrentUser', null)
    }
  },
  mutations: {
    setCurrentUser (state, val) {
      state.currentUser = val
    }
  }
})
