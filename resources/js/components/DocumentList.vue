<template>
  <div class="columns document-page">
    <div class="single-column document-list">
      <template v-for="(doc, key) in docs">
        <br>
        <DocumentItem :content="doc"></DocumentItem>
      </template>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import DocumentItem from './DocumentItem'

  export default {
    components: {
      DocumentItem,
    },
    data() {
      return {
        themes: window.globals.highlightThemes,
        docsLocal: []
      }
    },
    computed: mapGetters({
      docs: 'docs',
      fetchDocs: 'fetchDocs'
    }),
    watch: {
      '$route': 'fetchData',
      docs(newVal) {
        document.body.scrollTop = document.documentElement.scrollTop = 0
      }
    },
    created() {
      this.fetchData()
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
