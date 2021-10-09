import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    icon_url: '',
  },
  mutations: {
    set_name(state, new_name) {
      state.name = new_name
    },
    set_icon_url(state, new_icon_url) {
      state.icon_url = new_icon_url;
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {

  }
})
