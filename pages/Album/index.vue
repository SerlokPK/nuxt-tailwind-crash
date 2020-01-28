<template>
  <div>dosao sam na albume</div>
</template>

<script>
import api from '@/services/api';

export default {
  data() {
    return {
      albums: []
    };
  },
  head() {
    return {
      title: 'Albums'
    };
  },
  async created() {
    try {
      this.albums = await api.request('get', '/albums');
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style></style>
