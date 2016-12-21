<template>
    <router-link :to="{name: 'docs', params: {db: dbName, coll: coll.name}}" class="menu-item border-0 pl-5" :title="coll.name" :class="{'selected': open}">
      <!-- <i class="fa mr-1 text-orange" :class="{'fa-folder-open': open, 'fa-folder': !open}"></i> -->
      <span v-html="$icons.folder"></span>
      {{coll.name}}
    </router-link>
</template>

<script>
export default {
  props: {
    coll: {
      type: Object
    },
    dbName: {
      type: String
    }
  },
  computed: {
    open() {
      if (this.$route.params.db === this.dbName && this.$route.params.coll == this.coll.name) {
        return true
      }
      return false
    }
  }
}
</script>
