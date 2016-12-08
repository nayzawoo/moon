<template>
  <nav class="menu dbs-list">
    <span class="menu-heading">Databases</span>
    <ul>
      <template v-if="dbs.length">
        <template v-for="db in dbs">
          <DatabaseListItem :db="db"/>
          </DatabaseListItem>
        </template>
      </template>
      <template v-else>
        <Spinner></Spinner>
      </template>
    </ul>
  </nav>
</template>

<script>
import Spinner from './Spinner'
import DatabaseListItem from './DatabaseListItem'
import { mapGetters } from 'vuex'

export default {
  components: {
    Spinner,
    DatabaseListItem
  },

  data() {
    return {
    }
  },

  computed: mapGetters({
    dbs: 'dbs',
    errors: 'errors',
  }),

  created() {
    this.$store.dispatch('fetchDbs')
  }
}
</script>
