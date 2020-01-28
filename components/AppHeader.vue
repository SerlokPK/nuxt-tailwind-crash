<template>
  <div class="bg-blue-200 flex flex-row">
    <nuxt-link to="/">
      <img class="w-10" src="../assets/images/album-image.jpg" alt="album-image" />
    </nuxt-link>
    <ul class="flex m-5">
      <li class="px-3">
        <nuxt-link to="/About">About page</nuxt-link>
      </li>
      <li class="px-3">
        <nuxt-link to="/Album">Albums</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style>
</style>