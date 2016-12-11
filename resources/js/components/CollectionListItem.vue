<template>
  <div class="menu-item border-0 pl-4" :title="coll.name">
    <i class="fa fa-cubes mr-1"></i>
    <router-link :to="{name: 'docs', params: {db: dbName, coll: coll.name}}">
      {{coll.name}}
    </router-link>
  </div>
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
}
</script>
