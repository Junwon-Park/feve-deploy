import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

import { loadFonts } from './plugins/webfontloader';
// styles
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/assets/styles/tailwind.css';

//axios
import axios from 'axios';

// socket.io
import io from 'socket.io-client';
const socket = io('http://localhost:8080');

Vue.prototype.$socket = socket;
Vue.config.productionTip = false;
Vue.prototype.$axios = axios; //다른 데서 사용시 this.$axios로 사용

loadFonts();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
