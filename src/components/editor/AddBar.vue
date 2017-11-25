<template lang="html">
  <div class="column is-1-desktop
                     is-2-tablet
                     is-3-mobile">
    <div class="field" style="padding-bottom: 5px;">
      <br class="title">
    </div>
    <button type="button"
            name="button"
            class="button is-primary is-outlined"
            @click="pushColumn"
            style="width: 100%; height: 129px; margin-bottom: 3px;">Add</button>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'editor-addBar',
  methods: {
    pushColumn () {
      this.$emit('pushColumn')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
