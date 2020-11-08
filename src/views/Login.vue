<template>
  <b-overlay :show="showOverlay">
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Login:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          required
          placeholder="Enter login"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="Password"
        ></b-form-input>
      </b-form-group>
      <b-alert v-model="failed" variant="danger">
        Wrong username or password
      </b-alert>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </b-overlay>
</template>

<script>
import jwtDecode from 'jwt-decode';

export default {
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
};
</script>
