<template>
  <div>
    <pre class="code" v-html="highlightedContent"></pre>
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
      console.log(hljs.highlight('javascript', this.content))
    },
    computed: {
      highlightedContent() {
        return hljs.highlight('javascript', this.content).value
      }
    },
  }
</script>
