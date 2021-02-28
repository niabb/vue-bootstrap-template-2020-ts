<template>
  <b-overlay :show="showOverlay">
    <b-form>
      <b-form-group
        id="input-group-1"
        :label="$t('Login.username')+':'"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" :label="$t('Login.password')+':'" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
        ></b-form-input>
      </b-form-group>
      <b-alert v-model="failed" variant="danger">
        {{$t('Login.authenticationFailed')}}
      </b-alert>
      <b-button @click="onSubmit" variant="primary">{{$t('Login.submit')}}</b-button>
    </b-form>
  </b-overlay>
</template>

<script lang="ts">
import Vue from 'vue';
import jwtDecode from 'jwt-decode';

export default Vue.extend({
  name: 'Login',
  data: () => ({
    showOverlay: false,
    form: { username: '', password: '' },
    failed: false,
  }),
  components: {
  },
  methods: {
    async onSubmit() {
      this.failed = false;
      this.showOverlay = true;
      try {
        const result = await this.$auth.login({
          data: this.form,
        });
        if (result.data && result.data.token) {
          const decodedToken = jwtDecode(result.data.token);
          if (decodedToken) {
            this.$auth.user(decodedToken);
          }
          this.showOverlay = false;
        }
      } catch (error) {
        this.failed = true;
        this.showOverlay = false;
      }
    },
  },
});
</script>
