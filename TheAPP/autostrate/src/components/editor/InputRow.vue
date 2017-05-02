<template lang="html">
  <div class="row no-gutters text-center">
    <div class="col-2">
      <h2>{{ name }}</h2>
    </div>
    <div class="col-1"
         v-for="i in value.length">
      <input class="form-control" type="text" v-model="value[i-1]">
    </div>
  </div>
</template>

<script>
export default {
  props: ['value', 'name']
}
</script>

<style lang="css">
</style>
