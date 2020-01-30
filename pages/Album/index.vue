<template>
  <div>
    dosao sam na albume
    <button @click="getAlbums">Get albums</button>
  </div>
</template>

<script>
import axios, { request } from '@/plugins/axios';
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
  async asyncData(context) {
    try {
      const albums = await context.app.$repo.album.get();
      console.log(albums);
      console.log(albums[2]);
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async getAlbums() {
      const albums = await this.$repo.album.get();
      const album = await this.$repo.album.get('/2');
      console.log(albums);
      console.log(album);
    }
  }
};
</script>

<style></style>
