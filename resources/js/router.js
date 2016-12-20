import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from './components/Welcome'
import DocumentList from './components/DocumentList'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Welcome
}, {
  name: 'docs',
  path: '/documents/:db/:coll/',
  component: DocumentList
}, {
  path: '*',
  redirect: '/'
}]

export default new VueRouter({
  routes
})
