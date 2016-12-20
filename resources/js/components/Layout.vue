<template>
  <div>
    <Navbar />
    <DatabaseList></DatabaseList>
    <div class="container-xl main-content">
      <ContentHeader></ContentHeader>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import Navbar from './Navbar'
  import DatabaseList from './DatabaseList'
  import ContentHeader from './ContentHeader'

  export default {
    components: {
      Navbar,
      DatabaseList,
      ContentHeader
    }
  }
</script>

<style scoped>
  .container-xl {
    padding-top: 20px;
  }
</style>
