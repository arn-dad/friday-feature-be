import Vue from 'vue'
import Vuelidate from 'vuelidate'
import BootstrapVue from "bootstrap-vue"

import App from './App'
import store from './store'
import router from './router'

import Default from './Layout/Wrappers/baseLayout.vue';
import Pages from './Layout/Wrappers/pagesLayout.vue';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(Vuelidate);

Vue.component('default-layout', Default);
Vue.component('userpages-layout', Pages);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
