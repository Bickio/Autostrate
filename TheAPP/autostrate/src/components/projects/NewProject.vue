<template>
  <div style="height: 100%">
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
      this.$router.push('editor')
    }
  }
}
</script>
<style scoped>
</style>
