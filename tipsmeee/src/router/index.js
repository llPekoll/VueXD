import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tips from '@/components/Tips'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tips',
      name: 'Tips',
      component: Tips
    }
  ]
})
