<template>
  <nav class="menu dbs-list">
    <span class="menu-heading">Databases
    <button @click="reloadDbs" class="btn btn-sm btn-reload" title="Reload" type="button"><i class="fa fa-refresh"></i></button>
    </span>
    <ul>
      <template v-if="dbs.length">
        <template v-for="db in dbs">
          <DatabaseListItem :db="db"/>
          </DatabaseListItem>
        </template>
      </template>

      <div class="flash flash-error m-1" v-if="errors.message">
        {{errors.message}}
      </div>

      <template v-if="fetchingDbs">
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

  methods: {
    reloadDbs() {
      this.$store.dispatch('fetchDbs')
    }
  },

  computed: mapGetters({
    dbs: 'dbs',
    errors: 'errors',
    fetchingDbs: 'fetchingDbs',
  }),

  created() {
    this.$store.dispatch('fetchDbs')
  }
}
</script>
