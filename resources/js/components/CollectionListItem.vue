<template>
    <router-link :to="{name: 'docs', params: {db: dbName, coll: coll.name}}" class="menu-item border-0 pl-4" :title="coll.name">
      <i class="fa fa-cubes mr-1 text-orange"></i>
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
}
</script>
