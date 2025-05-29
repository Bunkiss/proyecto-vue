import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*
     {
       path: '/',
       name: 'home',
       component: HomeView,
     },
     */
     {
       path: '/contador',
       name: 'contador',

       component: () => import('../components/icons/Contador.vue'),
     },
     {
       path: '/lista-de-tareas',
       name: 'ListaDeTareas',

       component: () => import('../components/icons/ListaDeTareas.vue'),
     },
  ],
})

export default router
