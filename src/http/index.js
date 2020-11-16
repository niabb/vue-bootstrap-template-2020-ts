import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

// import router from '../router';
import config from '../config';

axios.defaults.baseURL = config.baseUrl;
// axios.interceptors.response.use(
//   (response) => {
//     if (response.status === 200 || response.status === 201) {
//       return Promise.resolve(response);
//     }
//     return Promise.reject(response);
//   },
//   (error) => {
//     console.log(error);

//     if (error.response.status) {
//       switch (error.response.status) {
//         case 400:

//           console.log('400 error');
//           break;

//         case 401:
//           console.log('401 error');
//           break;
//         case 403:
//           // router.replace({
//           //   path: '/login',
//           //   query: { redirect: router.currentRoute.fullPath },
//           // });
//           console.log('403 error');

//           break;
//         case 404:
//           console.log('page not exist');
//           break;
//         case 502:
//           console.log('502 error');

//           // setTimeout(() => {
//           //   router.replace({
//           //     path: '/login',
//           //     query: {
//           //       redirect: router.currentRoute.fullPath,
//           //     },
//           //   });
//           // }, 1000);
//           break;
//         default:
//           // console.log('Unexpected error.');
//       }
//     }
//     return Promise.reject(error.response);
//   },
// );

Vue.use(VueAxios, axios);

export default axios;
