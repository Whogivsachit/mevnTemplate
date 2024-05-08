import store from '@/store/store';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() { return { top: 0 } },

  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/indexPage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/404Page.vue'),
    }
  ]
})

export default router
