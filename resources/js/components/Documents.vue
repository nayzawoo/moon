<template>
  <div class="columns">
    <div class="single-column">
      <div class="blankslate">
        <h3>DB: {{ $route.params.db }}, Collection: {{ $route.params.coll }}</h3>
      </div>
      <template v-for="(doc, key) in docs">
        <br>
        <div>
          <h3><pre>{{doc}}</pre></h3>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters({
      docs: 'docs',
      fetchDocs: 'fetchDocs',
    }),
    created() {
     this.fetchData()
   },
   watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      this.$store.dispatch('fetchDocs', {
        db:this.$route.params.db,
        coll: this.$route.params.coll
      })
    }
  }
}
</script>
