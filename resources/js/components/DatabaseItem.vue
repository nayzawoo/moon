<template>
  <li class="database-item p-0 " :class="{'open': open}" :title="db.name">
    <a href="#" class="menu-item animated fadeIn d-block border-0" @click="toggleDbItem">
      <i class="fa tree-toggle-icon text-gray-dark mr-1" :class="{'fa-minus-square-o': open, 'fa-plus-square-o': !open}"></i>
      <i class="fa fa-database db-icon mr-1"></i>
      {{db.name}}
    </a>
    <template v-if="colls.length">
      <CollectionList :colls="colls" :db-name="db.name"></CollectionList>
    </template>
  </li>
</template>

<script>
import { mapGetters } from 'vuex'
import CollectionList from './CollectionList'

export default {
  props: {
    db: {
      required: true,
      type: Object
    }
  },

  components: {
    CollectionList
  },

  data() {
    return {
      open: false,
      firstOpen: false
    }
  },

  created() {
    if (this.$route.params.db === this.db.name) {
      this.fetchColls()
      this.firstOpen = this.open = true
    }
  },

  methods: {
    toggleDbItem(e) {
      e.preventDefault()
      this.fetchColls()
      this.firstOpen = true
      this.open = !this.open
    },
    fetchColls() {
      if(this.shouldFetch()) {
        this.$store.dispatch('fetchColls', this.db.name)
      }
    },
    shouldFetch() {
      return (!this.open && !this.firstOpen) || !this.colls.length
    }
  },

  computed: {
    ...mapGetters({
      collsByDb: 'collsByDb'
    }),
    colls() {
      var colls = this.collsByDb(this.db.name)
      if (colls) {
        return colls;
      }
      return []
    }
  }
}
</script>
