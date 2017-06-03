import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Editor from '@/components/editor/Editor'

Vue.use(Router)

const routes = [
  {
    path: '/editor',
    name: 'Editor',
    component: Editor
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})
