import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ "./views/Index.vue")
  },
  {
    path: '/:id',
    name: 'Recipe',
    component: () => import(/* webpackChunkName: "home" */ "./views/Recipe.vue")
  },
  {
    path: '/my-list',
    name: 'MyList',
    component: () => import(/* webpackChunkName: "home" */ "./views/MyList.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
