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

export default configuration;
