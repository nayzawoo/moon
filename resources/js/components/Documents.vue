<template>
  <div class="columns">
    <div class="single-column">
      <template v-for="(doc, key) in docs">
        <br>
        <Document :content="doc"></Document>
      </template>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Document from './Document'
  import _ from 'lodash'

  export default {
    components: {
      Document,
    },
    data() {
      return {
        docsLocal: []
      }
    },
    computed: mapGetters({
      docs: 'docs',
      fetchDocs: 'fetchDocs',
    }),
    created() {
     this.fetchData()
   },
   watch: {
    '$route': 'fetchData',
    docs(newVal) {
      if(_.isArray(newVal)) {
        this.docsLocal = []
        this.docsLocal = newVal
      }
    }
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
