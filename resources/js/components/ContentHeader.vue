<template>
  <div class="content-header">
    <div class="columns">
      <div class="one-half column">
        #title
        <Breadcrumb></Breadcrumb>
      </div>
      <div class="one-half column">
        <form class="right">
          <select class="form-select" v-model="currentTheme">
            <option>Choose a theme</option>
            <option v-for="(val, key) in themes" :value="key">{{val}}</option>
          </select>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import store from 'store'
  import Breadcrumb from './Breadcrumb'

  export default {
    components: {
      Breadcrumb,
    },
    data() {
      return {
        themes: window.globals.highlightThemes,
        currentTheme: null,
      }
    },
    watch: {
      currentTheme(newVal) {
        this.switchTheme(newVal)
      }
    },
    created() {
      this.currentTheme = this.defaultTheme()
    },
    methods: {
      switchTheme(theme) {
        if (this.themes[theme]) {
          store.set('themes', theme)
          document.getElementById('themes').href = `${window.globals.themeUrl}/${theme}.css`
        }
      },
      defaultTheme() {
        const storeTheme = store.get('themes')
        if (storeTheme && this.themes[storeTheme]) {
          return storeTheme;
        }
        return 'prism-okaidia'
      }
    }
  }
</script>
