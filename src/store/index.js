import Vue from 'vue';
import Vuex from 'vuex';

import data from '../services';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    porto: [
      ...data,
    ],
    contact: [],
  },
  mutations: {
    addContact(state, texts) {
      state.contact.push(texts);
    },
  },
  getters: {
    Portos: (state) => state.porto,
    Contacts: (state) => state.contact,
  },
  actions: {
    addContact({ commit }, texts) {
      commit('addContact', texts);
    },
  },
  modules: {
  },
});
