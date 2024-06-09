const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  productionSourceMap: false,
  publicPath: process.env.VUE_APP_HOME_DIR,
  transpileDependencies: [
    'vuetify',
  ],
  css: {
    extract: {
      ignoreOrder: true,
    },
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/styles/_variables.scss";
        `,
      },
    },
  },
});
