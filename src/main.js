import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

import VueGtag from 'vue-gtag';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import router from './router';

// The import order below imports, as auth needs http to be already setup, and interceptors needs
// both http and auth
import './http';
import './auth';
import './http/interceptors';
import App from './App.vue';
import store from './store';
import config from './config';
import i18n from './i18n';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

if (config.analyticsId) {
  Vue.use(VueGtag, {
    config: { id: config.analyticsId },
  }, router);
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
