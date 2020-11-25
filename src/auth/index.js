import Vue from 'vue';
import jwtDecode from 'jwt-decode';

import VueAuth from '@websanova/vue-auth/dist/v2/vue-auth.common';
import driverHttpAxios from '@websanova/vue-auth/dist/drivers/http/axios.1.x';
// import driverHttpVueResource from '@websanova/vue-auth/dist/drivers/http/vue-resource.1.x.js';
import driverRouterVueRouter from '@websanova/vue-auth/dist/drivers/router/vue-router.2.x';

const configuration = {
  plugins: {
    http: Vue.axios,
    router: Vue.router,
  },
  drivers: {
    auth: {
      request(req, token) {
        driverHttpAxios.setHeaders.call(this, req, {
          Authorization: `Bearer ${token}`,
        });
      },
      response(res) {
        const token = res.data ? res.data.token : '';
        return token;
      },
    },
    http: driverHttpAxios, // Axios
    router: driverRouterVueRouter,

  },
  options: {
    rolesKey: 'roles',
    loginData: { url: 'user/login', fetchUser: false, staySignedIn: true },
    refreshData: { enabled: false },
    fetchData: { enabled: false },
  },
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
