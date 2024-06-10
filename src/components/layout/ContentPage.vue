<template>
  <v-main class="wrapper-container">
    <router-view></router-view>
  </v-main>
</template>

<script>
export default {
  name: 'ContentPage',
};
</script>

<style lang="scss" scoped>
  .wrapper-container {
    grid-area: content;
    background: #FFFFFF;
    min-height: calc(100vh - (#{$header-height} + #{$footer-height}));
  }
</style>
