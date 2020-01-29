<template>
  <div>dosao sam na albume</div>
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
  async asyncData(ctx) {
    try {
      console.log(ctx.app.$albumRepository);
      //const albums = await ctx.app.$posts.get();
      //console.log(albums);
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style></style>
