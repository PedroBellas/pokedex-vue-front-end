import Vue from 'vue';
import VueRouter from 'vue-router';
import $eventHub from '@/config/eventHub';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: () => import(/* webpackChunkName: "home-page" */ '../views/HomePage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_HOME_DIR,
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.name) {
    const body = document.getElementsByTagName('body')[0];

    if (from && from.name) {
      body.classList.remove(`page--${from.name.toLowerCase()}`);
    }
    body.classList.add(`page--${to.name.toLowerCase()}`);
    body.classList.add('loading-page');

    $eventHub.$emit('asyncComponentLoading');
  }

  next();
});

router.afterEach(() => {
  const body = document.getElementsByTagName('body')[0];
  body.classList.remove('loading-page');

  $eventHub.$emit('asyncComponentLoaded');
});

export default router;
