import { createRouter, createWebHashHistory } from 'vue-router'
import Pokemon from '../views/Pokemon.vue'

const routes = [
  {
    path: '/listpokemon',
    name: 'listPokemon',
    component: () => import( '../views/listPokemon.vue')
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon',
    component: Pokemon
  },
  {
    path: '/pokedex',
    name: 'pokedex',
    component: () => import( '../views/listPokedex.vue')
  },
  {
    path: '/combate',
    name: 'combate',
    component: () => import( '../views/Combate.vue')
  },
  {
    path: '/fame',
    name: 'fame',
    component: () => import( '../views/Fame.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
