<template>
  <li class="dbs-list-item p-0 " :class="{'open': open}" :title="db.name">
    <a href="#" class="menu-item animated fadeIn d-block border-0" @click="toggleDbItem">
      <i class="fa tree-toggle-icon text-gray-dark mr-1" :class="{'fa-minus-square-o': open, 'fa-plus-square-o': !open}"></i>
      <i class="fa fa-database db-icon mr-1  text-gray-dark"></i>
      {{db.name}}
    </a>
    <template v-if="colls.length">
      <CollectionsList :colls="colls" :db-name="db.name"></CollectionsList>
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
      required: true,
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
      if((!this.open && !this.firstOpen) || !this.colls.length) {
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
    }
  }
}
</script>
