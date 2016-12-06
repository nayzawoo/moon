<template>
  <div>
    <CollectionListItem col="col" />
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
    cols: {
      type: Array
    },
    dbName: {
      type: String,
    },
    // fetchCols: React.PropTypes.func
  }
}

</script>
