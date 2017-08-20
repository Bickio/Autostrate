<template>
  <div style="height: 100%; min-height: 200px;">
    <a class="button is-primary is-outlined"
       style="height: 100%; width: 100%"
       @click="newProject">
      <span class="icon is-large">
        <i class="fa fa-plus"></i>
      </span>
     </a>
  </div>
</template>
<script>
export default {
  methods: {
    newProject () {
      this.$store.commit('newProject')
    }
  }
}
</script>
<style scoped>
</style>
