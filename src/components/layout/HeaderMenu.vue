<template>
  <header class="d-flex align-center">
    <img src="@/assets/pokedex.svg" alt="pokedex logo" class="logo" />

    <span class="text-title">
      Pokédex
    </span>
  </header>
</template>

<script>
export default {
  name: 'HeaderMenu',
};
</script>

<style lang="scss">
  header {
    grid-area: header;
    width: 100%;
    height: $mobile-header-height;
    background: $primary-color;
    padding: 0 $default-margin;

    .logo {
      width: 24px;
      height: 24px;
    }

    .text-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #FFFFFF;
      margin-left: $default-margin;
    }
  }

  @media #{map-get($display-breakpoints, 'xl-only')} {
    header {
      height: $header-height;

      .logo {
        width: 30px;
        height: 30px;
      }

      .text-title {
        font-size: 1.75rem;
      }
    }
  }
</style>
