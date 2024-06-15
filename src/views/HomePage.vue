<template>
  <div class="wrapper-home-page d-flex flex-column">
    <div class="wrapper-filters d-flex justify-space-between">
      <v-text-field
        class="search-bar"
        solo
        dense
        rounded
        placeholder="Search"
        hide-details
        flat
        clearable
        color="#DC0A2D"
      >
        <template #prepend-inner>
          <v-icon @click="doSomething()">mdi-magnify</v-icon>
        </template>
      </v-text-field>

      <v-menu :close-on-content-click="false" offset-y class="select-filter-container">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="menu-wrapper"
            v-bind="attrs"
            v-on="on"
            icon
            elevation="1"
          >
            #
          </v-btn>
        </template>
        <v-list class="pa-0">
          <v-list-item class="pa-0">
            Not defined Yet
            <!--TODO: Define filter-->
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    doSomething() {
      console.log('do something');
    },
  },
};
</script>

<style lang="scss">
  $item-size: 32px;
  $inner-shadow: inset 0 1px 3px rgba($color: #000000, $alpha: 0.25);

  .wrapper-home-page {
    width: 100%;
    background: $primary-color;

    .wrapper-filters {
      padding: 0 $default-margin 15px;

      .search-bar {
        min-width: 76vw;
        width: 76vw;
        max-width: 76vw;

        .v-input__control .v-input__slot {
          min-height: $item-size;
          height: $item-size;
          max-height: $item-size;
          padding: 0 10px;
          font-size: 0.875rem;
          box-shadow: $inner-shadow;

          .v-icon {
            color: $primary-color;
          }
        }
      }

      .menu-wrapper {
        min-width: $item-size;
        width: $item-size;
        max-width: $item-size;
        min-height: $item-size;
        height: $item-size;
        max-height: $item-size;
        background: #FFFFFF;
        box-shadow: $inner-shadow;
        font-size: 1rem;
        color: $primary-color;
      }
    }
  }
</style>
