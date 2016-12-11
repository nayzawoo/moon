<template>
  <li class="dbs-list-item p-0 " :class="classes">
    <a href="#" class="menu-item animated fadeIn d-block" @click="toggleDbItem">
      <i class="fa tree-toggle-icon text-gray-dark mr-1" :class="{'fa-caret-down': open, 'fa-caret-right': !open}"></i>
      <i class="fa fa-database db-icon mr-1"></i>
      {{db.name}}
    </a>
    <template v-if="colls.length">
      <CollectionsList :colls="colls"></CollectionsList>
    </template>
  </li>
</template>

<script>
import { mapGetters } from 'vuex'
import CollectionsList from './CollectionsList'
import _ from 'lodash'

export default {
  props: {
    db: {
      type: Object
    }
  },

  components: {
    CollectionsList
  },

  data() {
    return {
      open: false,
      firstOpen: false
    }
  },

  methods: {
    toggleDbItem(e) {
      e.preventDefault()
      if(!this.open && !this.firstOpen) {
        this.$store.dispatch('fetchColls', this.db.name)
      }
      this.firstOpen = true
      this.open = !this.open
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
    },
    classes() {
      return this.open ? 'open' : ''
    },
  }
}
</script>
