<template lang="html">
  <div class="container">
      <app-input-row v-model="melody" name="Melody"></app-input-row>
      <app-input-row v-model="chords" name="Chords"></app-input-row>
    <hr>
    <div v-for="i in instruments.length">
      <app-instrument v-model="instruments[i-1]"></app-instrument>
    </div>
    <hr>
    <div>
      <button type="button" name="button" @click="addBar()">Add Bar</button>
    </div>
  </div>
</template>

<script>
import InputRow from './InputRow'
import Instrument from './Instrument'
export default {
  components: {
    appInputRow: InputRow,
    appInstrument: Instrument
  },
  data () {
    return {
      melody: ['', '', ''],
      chords: ['', '', ''],
      instruments: [
        {name: 'Trumpet', notes: ['A', 'D', 'F#']},
        {name: 'Alto Sax', notes: ['Db', 'A', 'C#']},
        {name: 'Trombone', notes: ['A', 'D', 'Bb']}
      ]
    }
  },
  methods: {
    addBar () {
      this.melody.push('')
      this.chords.push('')
      for (let i in this.instruments) {
        this.instruments[i].notes.push('')
      }
    }
  }
}
</script>

<style lang="css">
</style>
