<template lang="html">
  <div>
    <app-box editable :value="bar.melody">Melody</app-box>
    <app-box editable :value="bar.chord">Chords</app-box>
    <hr>
    <app-box>Instr1</app-box>
    <app-box>Instr2</app-box>
  </div>
</template>

<script>
import Box from './Box'
export default {
  props: ['bar'],
  components: {
    appBox: Box
  }
}
</script>
<style lang="css" scoped>
</style>
