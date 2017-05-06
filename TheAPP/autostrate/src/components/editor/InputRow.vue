<template lang="html">
  <div class="row no-gutters text-center">
    <div class="col-2">
      <h3 class="row-name">{{ name }}</h3>
    </div>
    <div class="col-1"
         v-for="i in value.length">
      <input class="form-control text-center input-box" type="text" v-model="value[i-1]">
    </div>
  </div>
</template>

<script>
export default {
  props: ['value', 'name']
}
</script>

<style lang="css" scoped>
.input-box {
  font-size: 1.25rem;
}
.row-name {
  font-family: 'Roboto', sans-serif;
  margin: 4px 0;
  font-size: 1.75rem;
  color: rgb(70, 74, 76);
}
.form-control:focus {
  background-color: #EEE;
  -webkit-box-shadow: inset 1px 1px 3px 0px rgba(0,0,0,0.41);
  -moz-box-shadow: inset 1px 1px 3px 0px rgba(0,0,0,0.41);
  box-shadow: inset 1px 1px 3px 0px rgba(0,0,0,0.41);
}
</style>
