<template>
  <div class="collection-list" >
    <template v-for="coll in colls">
      <CollectionItem :coll="coll" :db-name="dbName"/>
    </template>
  </div>
</template>

<script>

  import Spinner from './Spinner'
  import CollectionItem from './CollectionItem'

  export default {
    components: {
      CollectionItem
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
