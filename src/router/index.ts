import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Recipe browser',
      component: () => import('../views/RecipeBrowser.vue')
    },
    {
      path: '/recipe-details',
      name: 'Recipe details',
      component: () => import('../views/RecipeDetails.vue')
    }
  ]
})

export default router
