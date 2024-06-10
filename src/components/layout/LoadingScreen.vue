<template>
  <div
    class="loading d-flex flex-column align-center justify-center"
    :class="{'loading-hide': !show}"
  >
    <span class="mb-4">Pokedex</span>
    <v-progress-linear class="loading-progress" indeterminate color="#fff" />
  </div>
</template>

<script>
import $eventHub from '@/config/eventHub';

export default {
  name: 'LoadingScreen',
  data: () => ({
    show: false,
  }),
  mounted() {
    $eventHub.$on('asyncComponentLoading', this.start);
    $eventHub.$on('asyncComponentLoaded', this.stop);
  },
  methods: {
    start() {
      this.show = true;
    },
    stop() {
      this.show = false;
    },
  },
};
</script>

<style lang="scss">
  body.loading-page {
    height: 100vh;
    overflow: hidden;
  }

  .loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999999;
    background: rgba(0, 0, 0, .9);
    opacity: 1;
    transition: all .4s linear;

    span {
      color: #fff;
      margin-bottom: 2px;
    }

    &.loading-hide {
      opacity: 0;
      pointer-events: none;
    }

    img,
    .loading-progress {
      width: 250px;
    }

    img {
      margin-bottom: 30px;
    }
  }
</style>
