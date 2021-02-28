import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import config from '../config';

axios.defaults.baseURL = config.baseUrl;

Vue.use(VueAxios, axios);

export default axios;
