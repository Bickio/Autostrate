<template lang="html">
  <div class="column is-6-mobile is-hidden-desktop is-hidden-tablet">
    <div class="field">
      <br class="title">
    </div>
    <div class="field">
      <h1 class="title has-text-right"
          style="margin-right: 24px;">Chords</h1>
    </div>
    <div class="field">
      <h1 class="title has-text-right"
          style="margin-right: 24px;">Melody</h1>
    </div>
    <div class="field">
      <h1 class="title has-text-right"
          style="margin-right: 24px;">Rule</h1>
    </div>
    <div class="field" style="height: 36px; padding-top: 12px;">
      <h1 class="title is-4 has-text-right"
          style="margin-right: 24px;">Instruments</h1>
    </div>
    <div style="margin-bottom: 24px; height: 45px;"
         v-for="id in instrumentOrder">
      <h1 class="title has-text-right"
          style="margin-right: 24px;">{{instruments[id].name}}</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'editor-mobileHeaders',
  computed: {
    ...mapGetters([
      'instruments',
      'instrumentOrder'
    ])
  }
}
</script>

<style lang="css" scoped>
</style>
