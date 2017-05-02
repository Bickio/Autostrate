<template lang="html">
  <div class="container">
    <app-input-row v-model="melody" name="Melody"></app-input-row>
    <app-input-row v-model="chords" name="Chords"></app-input-row>
    <hr>
    <div v-for="instrument in instruments">
      <app-output-row :notes="instrument.notes"
                      :name="instrument.name"></app-output-row>
    </div>


    <hr>
    <input type="text" v-model="melody[0]">
    <input type="text" v-model="chords[0]">
  </div>
</template>

<script>
import InputRow from './InputRow'
import OutputRow from './OutputRow'
export default {
  components: {
    appInputRow: InputRow,
    appOutputRow: OutputRow
  },
  data () {
    return {
      melody: ['', ''],
      chords: ['', ''],
      instruments: [
        {name: 'Trumpet', notes: ['a', 'd']},
        {name: 'Trombone', notes: ['a', 'd']}
      ]
    }
  }
}
</script>

<style lang="css">
</style>
