<template>
  <v-app>
    <HeaderMenu />

    <ContentPage />

    <FooterPage />

    <LoadingScreen />
  </v-app>
</template>

<script>
import HeaderMenu from '@/components/layout/HeaderMenu.vue';
import ContentPage from '@/components/layout/ContentPage.vue';
import FooterPage from '@/components/layout/FooterPage.vue';
import LoadingScreen from '@/components/layout/LoadingScreen.vue';

export default {
  name: 'App',
  components: {
    HeaderMenu,
    ContentPage,
    FooterPage,
    LoadingScreen,
  },
};
</script>

<style lang="scss">
  * {
    outline: none;
    box-sizing: border-box !important;
    padding: 0;
    margin: 0;
    border: 0;
  }

  #app {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,
      Helvetica Neue, Arial, sans-serif;

    .v-application--wrap {
      display: grid;
      grid-template-areas:
        "header"
        "content"
        "footer";
    }
  }
</style>
