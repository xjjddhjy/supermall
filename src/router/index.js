import VueRouter from 'vue-router'
import Vue from 'vue'

const Home=()=>import('../views/home/Home.vue')
const Category=()=>import('../views/category/Category.vue')
const Cart=()=>import('../views/cart/Cart.vue')
const Profile=()=>import('../views/profile/Profile.vue')
const Detail=()=>import('../views/detail/Detail.vue')
// const Search=()=>import('../views/search/Search.vue')

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/detail/:id',
      component: Detail
    },
    // {
    //   path: '/search',
    //   component: Search
    // },
  ]
})
