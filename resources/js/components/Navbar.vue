<template>
  <header class="bg-gray border-bottom">
    <div class="container-xl">
      <template v-if="$route.params.coll">
        <a href="javascript:void(0);" class=""><b><i class="fa fa-database fa-fw"></i>{{$route.params.db}}</b></a>
        <a href="javascript:void(0);" class=""><b><i class="fa fa-caret-right"></i></b></a>
        <a href="javascript:void(0);" class=""><b><i class="fa fa-cubes fa-fw"></i> {{$route.params.coll}}</b></a>
      </template>
      <nav class="pull-right">
        <a href="#"><b>Settings</b></a>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
}
</script>
