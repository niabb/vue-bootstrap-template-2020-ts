<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand to="/">NavBar</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">{{$t('home')}}</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
             <b-nav-item-dropdown right>
              <template slot="button-content">
                <b-icon-globe/>
                {{$t('languages.'+$i18n.locale)}}
              </template>
              <b-dropdown-item
                v-for="lng in $i18n.availableLocales"
                :key="lng"
                @click="changeLanguage(lng)"
              >
                {{$t('languages.'+lng)}}
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown v-if="$auth.check()" right>
              <template slot="button-content"><em>{{userName}}</em></template>
              <b-dropdown-item v-if="$auth.check('admin')" to="/admin">
                {{$t('admin')}}
              </b-dropdown-item>
              <b-dropdown-item to="/profile">
                {{$t('profile')}}
              </b-dropdown-item>
              <b-dropdown-item @click="logout">{{$t('logout')}}</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item v-if="!$auth.check()" to="/login">{{$t('login')}}</b-nav-item>
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

export default {
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
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style>
</style>
