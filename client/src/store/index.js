import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { authStore } from './auth';

Vue.use(Vuex);

const authState = createPersistedState({
  paths: ['authStore']
});

const store = new Vuex.Store({
  state: {
    isLogin: JSON.parse(localStorage.getItem('isLogin')),
    accessToken: localStorage.getItem('Authorization'),
    userId: localStorage.getItem('userId')
  },
  modules: { authStore },
  plugins: [authState],
  getters: { 
    LocalUrl() { 
        return "http://localhost:3000";
    }, 
    ServerUrl() { 
        return "http://localhost:8080";
    } 
  }, 
});

export default store;
