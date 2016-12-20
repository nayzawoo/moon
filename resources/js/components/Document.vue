<template>
  <div class="document-block">
    <pre class="bg-gray-dark text-white" v-html="highlightedContent"></pre>
  </div>
</template>

<script>
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
        return hljs.highlight('mongocustom', this.content).value
      }
    },
  }
</script>
