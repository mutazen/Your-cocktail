import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TypeList from '@/views/TypeList.vue'
import CategoryList from '@/views/CategoryList.vue'
import IngredientList from '@/views/IngredientList.vue'
import CocktailDetails from '@/views/CocktailDetails.vue'
import SearchCocktail from '@/views/SearchCocktail.vue'
import IngredientDetails from '@/views/IngredientDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Your-cocktail/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Your-cocktail/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/About.vue')
  },
  {
    path: '/Your-cocktail/types',
    name: 'TypeList',
    component: TypeList
  },
  {
    path: '/Your-cocktail/categories',
    name: 'CategoryList',
    component: CategoryList
  },
  {
    path: '/Your-cocktail/ingredients',
    name: 'IngredientList',
    component: IngredientList
  },
  {
    path: '/Your-cocktail/cocktail/:cocktailId',
    alias: '/cocktails/:cocktailId',
    name: 'CocktailDetails',
    component: CocktailDetails,
    props: true
  },
  {
    path: '/Your-cocktail/searchCocktail/',
    name: 'SearchCocktail',
    component: SearchCocktail,
    props: true
  },
  {
    path: '/Your-cocktail/ingredient/:ingredientId',
    name: 'IngredientDetails',
    component: IngredientDetails,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
