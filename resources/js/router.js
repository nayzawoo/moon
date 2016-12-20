import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from './components/Welcome'
import Documents from './components/Documents'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Welcome
}, {
  name: 'docs',
  path: '/documents/:db/:coll/',
  component: Documents
}, {
  path: '*',
  redirect: '/'
}]

export default new VueRouter({
  routes
})
