import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/LandingPage/Home.vue'
import LandingPageHeader from '../views/LandingPage/Header.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
          default: Home,
          LandingPageHeader
      }
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
