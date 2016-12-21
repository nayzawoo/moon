<template>
  <nav class="menu database-list border-right">
    <span class="menu-heading">Search Database
      <button @click="reloadDbs" class="btn btn-sm btn-reload" title="Reload" type="button">
        <!-- <i class="fa fa-refresh"></i> -->
        <span v-html="$icons.sync"></span>
      </button>
    </span>
    <ul>
      <!-- Database Lists -->
      <template v-for="(value, key) in dbs">
        <DatabaseItem :db="value"/></DatabaseItem>
      </template>

      <!-- Error Message -->
      <div class="flash flash-error m-1" v-if="errors.message">
        {{errors.message}}
      </div>

      <!-- Loading spinner -->
      <Spinner  v-if="false"></Spinner>
    </ul>
  </nav>
</template>

<script>
  import Spinner from './Spinner'
  import DatabaseItem from './DatabaseItem'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      Spinner,
      DatabaseItem
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
