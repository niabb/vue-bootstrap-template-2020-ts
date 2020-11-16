import Vue from 'vue';
import VueAuth from '@websanova/vue-auth';
import jwtDecode from 'jwt-decode';

import httpAxios from '@websanova/vue-auth/dist/drivers/http/axios.1.x.esm';
import routerVueRouter from '@websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm';

const configuration = {
  auth: {
    request(req, token) {
      this.http.setHeaders.call(this, req, {
        Authorization: `Bearer ${token}`,
      });
    },
    response(res) {
      const token = res.data ? res.data.token : '';
      return token;
    },
  },
  http: httpAxios,
  router: routerVueRouter,
  rolesKey: 'roles',
  loginData: { url: 'user/login', fetchUser: false, staySignedIn: true },
  refreshData: { enabled: false },
  fetchData: { enabled: false },
};

Vue.use(VueAuth, configuration);

// If we have a token locally stored, we decode the token, and store the user if the token is still
// valid, otherwise we log the user out.
if (Vue.auth.token()) {
  const decodedToken = jwtDecode(Vue.auth.token());
  if (decodedToken) {
    const now = new Date();
    if (decodedToken.exp * 1000 < now.valueOf()) {
      // The token has expired, we log the user out.
      Vue.auth.logout({
        makeRequest: false,
        redirect: { name: 'Home' },
      });
    } else {
      Vue.auth.user(decodedToken);
    }
  }
}

export default configuration;
