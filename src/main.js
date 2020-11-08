import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueAuth from '@websanova/vue-auth';
import VueGtag from 'vue-gtag';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';
import router from './router';
import store from './store';
import auth from './auth';
import config from './config';

Vue.router = router;
axios.defaults.baseURL = config.baseUrl;

Vue.use(VueAxios, axios);
Vue.use(VueAuth, auth);
Vue.use(BootstrapVue);

if (config.analyticsId) {
  Vue.use(VueGtag, {
    config: { id: config.analyticsId },
  }, router);
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
