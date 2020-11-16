<template>
  <b-overlay :show="showOverlay">
    <p>
      This is a page only available for an authenticated user.
    </p>
    <p>
      The user has the following roles:
      <ul>
        <li v-for="role in roles" :key="role">{{role}}</li>
      </ul>
    </p>
  </b-overlay>
</template>

<script>

export default {
  name: 'Profile',
  data() {
    return {
      roles: [],
      showOverlay: false,
    };
  },
  async created() {
    await this.getRoles();
  },
  components: {
  },
  methods: {
    async getRoles() {
      this.showOverlay = true;
      const response = await this.axios.get('/user/getRoles');
      if (response && response.data && Array.isArray(response.data.roles)) {
        this.roles = response.data.roles;
      }
      this.showOverlay = false;
    },
  },
};
</script>
