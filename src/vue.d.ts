import VueRouter from 'vue-router';
import { VueAuth } from '@websanova/vue-auth';

declare module 'vue/types/vue' {
  interface VueConstructor {
    router: VueRouter;
    auth: VueAuth;
  }
  interface Vue {
    $auth: VueAuth;
  }
}
