import Vue from 'vue';

import VueRouter from 'vue-router';
import DetailView from './detail.vue';
import ListView from './list.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  base: '/app',
  mode: 'history',
  routes: [
    {
      component: ListView,
      path: '/',
    },
    {
      component: ListView,
      path: '/list',
    },
    {
      component: DetailView,
      path: '/detail/:id',
    },
  ],
});

export default router;