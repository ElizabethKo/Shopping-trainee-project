import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login";
import ProductCard from "../components/ProductCard";
import Links from "../views/Links";
import CompanyDetails from "../views/CompanyDetails";
import Cart from "../views/Cart"
import CartProduct from "../components/CartProduct";
import ProductDescriptionOpen from "../views/ProductDescriptionOpen";
import CreateAccount from "../components/CreateAccount";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/ProductDescriptionOpen',
    name: 'ProductDescriptionOpen',
    component: ProductDescriptionOpen,
    props: true
  },
  {
    path: '/links',
    name: 'Links',
    component: Links
  },
  {
    path: '/links/:id',
    name: 'CompanyDetails',
    component: CompanyDetails
  },

  {
    path: '/productCard',
    name: 'ProductCard',
    component: ProductCard
  },

  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    props: true
  },
  {
    path: '/cartProduct',
    name: 'CartProduct',
    component: CartProduct
  },
  {
    path: '/CreateAccount',
    name: 'CreateAccount',
    component: CreateAccount
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
