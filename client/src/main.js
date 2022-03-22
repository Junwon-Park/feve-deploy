import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import { loadFonts } from './plugins/webfontloader'
// styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

Vue.config.productionTip = false;
loadFonts()

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
