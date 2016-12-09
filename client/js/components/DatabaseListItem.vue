<template>
  <li class="dbs-list-item p-0 " :class="classes">
    <a href="#" class="menu-item animated fadeIn d-block" @click="toggleDbItem">
      <i class="fa tree-toggle-icon text-gray-dark mr-1" :class="{'fa-caret-down': open, 'fa-caret-right': !open}"></i>
      <i class="fa fa-database db-icon mr-1"></i>
      {{db.name}}
    </a>
    <div class="collection-list">
      <!-- {this.renderCollections(db.name)} -->
      {{colls}}
    </div>
  </li>
</template>

<script>
export default {
  props: {
    db: {
      type: Object
    },
    colls: {}
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
      this.firstOpen = true
      this.open = !this.open
      if(open) {
        this.$store.dispatch('fetchColls', this.db.name)
      }
    }
  },

  computed: {
    classes() {
      return this.open ? 'open' : ''
    }
  }
}
</script>
