<template>
  <div class="columns documents-page">
    <div class="single-column clearfix">
      <form class="right">
        <select class="form-select" v-model="currentTheme">
          <option>Choose a theme</option>
          <option v-for="(val, key) in themes" :value="key">{{val}}</option>
        </select>
      </form>
    </div>
    <div class="single-column documents-list">
      <template v-for="(doc, key) in docs">
        <br>
        <Document :content="doc"></Document>
      </template>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import store from 'store'
  import Document from './Document'
  import _ from 'lodash'

  export default {
    components: {
      Document,
    },
    data() {
      return {
        themes: window.globals.highlightThemes,
        docsLocal: [],
        currentTheme: null,
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
      },
      currentTheme(newVal) {
        this.switchTheme(newVal)
      }
    },
    created() {
      this.currentTheme = this.defaultTheme()
      this.fetchData()
    },
    methods: {
      switchTheme(theme) {
        if (this.themes[theme]) {
          store.set('hljs-theme', theme)
          document.getElementById('hljs-theme').href = `${window.globals.themeUrl}/${theme}.css`
        }
      },
      fetchData() {
        this.$store.dispatch('fetchDocs', {
          db:this.$route.params.db,
          coll: this.$route.params.coll
        })
      },
      defaultTheme() {
        const storeTheme = store.get('hljs-theme')
        if (storeTheme && this.themes[storeTheme]) {
          return storeTheme;
        }
        return 'arta';
      }
    }
  }
</script>
