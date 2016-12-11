<template>
  <div class="collection-list" >
    <template v-for="coll in colls">
      <CollectionListItem :coll="coll" />
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
        type: Array
      },
      dbName: {
        type: String,
      },
    // fetchCols: React.PropTypes.func
  }
}
</script>
