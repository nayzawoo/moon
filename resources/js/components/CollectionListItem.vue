<template>
  <div class="menu-item pl-4">
    <i class="fa fa-cubes mr-1"></i>{{coll.name}}
  </div>
</template>

<script>
export default {
  props: {
    coll: {
      type: Object
    }
  },
}
</script>
