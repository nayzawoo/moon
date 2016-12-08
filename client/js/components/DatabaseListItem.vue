<template>
  <li class="dbs-list-item p-0 " :class="classes">
    <a href="#" class="menu-item animated fadeIn d-block" @click="onClickHandler">
      <i class="fa fa-caret-right tree-toggle-icon text-gray-dark mr-1"></i>
      <i class="fa fa-database db-icon mr-1"></i>
      {{db.name}}
    </a>
    <div class="collection-list">
      <!-- {this.renderCollections(db.name)} -->
      collectios
    </div>
  </li>
</template>

<script>
export default {
  props: {
    db: {
      type: Object
    }
  },

  data() {
    return {
      open: false,
      firstOpen: false
    }
  },

  methods: {
    onClickHandler(e) {
      e.preventDefault()
      this.firstOpen = true
      this.open = !this.open
    }
  },

  computed: {
    classes() {
      return this.open ? 'open' : ''
    }
  }
}
</script>
