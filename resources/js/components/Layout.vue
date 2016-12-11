<template>
      <div>
        <Navbar />
        <div class="container-xl">
          <div class="columns">
            <div class="one-fifth column">
              <DatabasesList></DatabasesList>
            </div>
            <div class="four-fifth column">
              <!-- {this.props.children} -->
            </div>
          </div>
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
