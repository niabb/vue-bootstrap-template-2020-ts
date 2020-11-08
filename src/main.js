import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueAuth from '@websanova/vue-auth';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';
import router from './router';
import store from './store';
import auth from './auth';

Vue.router = router;
axios.defaults.baseURL = 'http://localhost:8000';
Vue.use(VueAxios, axios);

Vue.use(VueAuth, auth);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
