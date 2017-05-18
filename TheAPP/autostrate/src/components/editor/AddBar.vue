<template lang="html">
  <div class="column is-1">
    <button type="button"
            name="button"
            class="button"
            @click="addColumn"
            style="width: 100%; height: 132px;">Add</button>
    <hr>
  </div>
</template>

<script>
export default {
  methods: {
    addColumn () {
      this.$emit('addColumn')
    }
  }
}
</script>

<style lang="css">
</style>
