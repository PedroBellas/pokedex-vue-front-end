import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_HOME_DIR,
  routes,
});

export default router;
