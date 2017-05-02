<template lang="html">
  <div class="row no-gutters">
    <div class="col-2">
      <h2>{{ name }}</h2>
    </div>
    <div class="col-1"
         v-for="note in notes">
      <div class="card" style="height: 38px">
       <div class="card-block" style="padding: 8px 12px; height: 20px">
         <p>{{ note.toUpperCase() }}</p>
       </div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['notes', 'name']
}
</script>

<style lang="css">
</style>
