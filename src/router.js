import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ "./views/Index.vue")
  },
  {
    path: '/my-list',
    name: 'MyList',
    component: () => import(/* webpackChunkName: "my-list" */ "./views/MyList.vue")
  },
  {
    path: '/:id',
    name: 'Recipe',
    component: () => import(/* webpackChunkName: "recipe" */ "./views/Recipe.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
