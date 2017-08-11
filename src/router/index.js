import Vue from 'vue'
import Router from 'vue-router'
import Articles from '@/components/Articles'
import About from '@/components/About'
import signin from '@/components/admin/signin'
import manage from '@/components/admin/manage'
import signup from '@/components/admin/signup'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Articles},
    {path: '/about', component: About},
    {path: '/admin/signin', component: signin},
    {path: '/admin/manage', component: manage},
    {path: '/admin/signup', component: signup}

  ]
})
