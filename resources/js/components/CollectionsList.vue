<template>
  <div class="collection-list" >
    <template v-for="coll in colls">
      <CollectionListItem :coll="coll" :db-name="dbName"/>
    </template>
  </div>
</template>

<script>

  import Spinner from './Spinner'
  import CollectionListItem from './CollectionListItem'

  export default {
    components: {
      CollectionListItem
    },

    props: {
      colls: {
        required: true,
        type: Array
      },
      dbName: {
        required: true,
        type: String,
      },
    // fetchCols: React.PropTypes.func
  }
}
</script>
