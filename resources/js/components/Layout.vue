<template>
  <div>
    <Navbar />
    <DatabasesList></DatabasesList>
    <div class="container-xl main-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import Navbar from './Navbar'
  import DatabasesList from './DatabasesList'

  export default {
    components: {
      Navbar,
      DatabasesList
    }
  }
</script>

<style scoped>
  .container-xl {
    padding-top: 20px;
  }
</style>
