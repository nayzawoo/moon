<template>
  <li class="menu-item dbs-list-item" :class="classes">
    <a href="#" class="animated fadeIn" @click="onClickHandler">
      <i class="fa fa-fw fa-caret-right tree-toggle-icon"></i>
      <i class="fa fa-fw fa-database db-icon"></i>
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
