<template>
  <Layout></Layout>
</template>

<script>
import Layout from './components/Layout'
import store from './store'

export default {
  name: 'app',
  store,
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Layout
  }
}
</script>
