<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand to="/">NavBar</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown v-if="$auth.check()" right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content"><em>{{userName}}</em></template>
              <b-dropdown-item v-if="$auth.check('admin')" to="/admin">Admin</b-dropdown-item>
              <b-dropdown-item @click="logout">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item v-if="!$auth.check()" to="/login">Login</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>
<script>
import jwtDecode from 'jwt-decode';

export default {
  created() {
    if (this.$auth.token()) {
      const decodedToken = jwtDecode(this.$auth.token());
      if (decodedToken) {
        this.$auth.user(decodedToken);
      }
    }
  },
  computed: {
    userName() {
      const user = this.$auth.user();
      if (user) {
        return user.username;
      }
      return '';
    },
  },
  methods: {
    logout() {
      this.$auth
        .logout({
          makeRequest: false,
          redirect: { name: 'Home' },
        });
    },
  },
};
</script>

<style>
</style>
