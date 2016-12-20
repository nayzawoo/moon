<template>
  <div class="document-item">
    <pre class="language-bson" v-html="highlightedContent"></pre>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  export default {
    data() {
      return {
      }
    },
    props: {
      content: {
        type: String,
        required: true
      }
    },
    created() {
    },
    computed: {
      highlightedContent() {
        return Prism.highlight(this.content, Prism.languages.javascript)
      }
    },
  }
</script>
