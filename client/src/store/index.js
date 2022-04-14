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
    userId: localStorage.getItem('userId'),
    userAdmin: localStorage.getItem('userAdmin'),
    googleLogin: localStorage.getItem('googleLogin')
  },
  modules: { authStore },
  plugins: [authState],
  getters: {
    LocalUrl() {
      return 'https://feve.link';
    },
    ServerUrl() {
      return 'http://ec2-52-23-226-152.compute-1.amazonaws.com';
    },
    googleLoginUrl() {
      return 'https://accounts.google.com/o/oauth2/v2/auth?client_id=237233087109-1v95u6a4qm3htd2a0hlhorhlo64ppj60.apps.googleusercontent.com&response_type=code&redirect_uri=https://localhost:3000&scope=https://www.googleapis.com/auth/userinfo.profile';
    },
    googleLogOutUrl() {
      return `https://oauth2.googleapis.com/revoke?token=`;
    },
    adminPage() {
      return 'https://feve.link/admin';
    }
  }
});

export default store;
