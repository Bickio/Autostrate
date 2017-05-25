<template lang="html">
  <div class="column is-1-desktop
                     is-2-tablet
                     is-3-mobile">
    <div class="field">
      <br class="title">
    </div>
    <button type="button"
            name="button"
            class="button is-primary is-outlined"
            @click="addColumn"
            style="width: 100%; height: 132px; margin-bottom: 12px;">Add</button>
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
