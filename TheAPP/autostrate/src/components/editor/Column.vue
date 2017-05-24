<template lang="html">
<div class="column is-1-desktop
                   is-2-tablet
                   is-3-mobile">
  <div class="field has-text-centered">
    <a class="button is-danger is-outlined" @click="remove">
      <span class="icon is-small">
        <i class="fa fa-times"></i>
      </span>
    </a>
  </div>
  <div class="field">
    <p class="control">
      <input class="input"
             :class="{ 'is-danger': !isValidChord }"
             :value="value.chord"
             @input="updateProperty('chord', $event.target.value)">
    </p>
  </div>
  <div class="field">
    <p class="control">
      <input class="input"
             :class="{ 'is-danger': !isValidNote }"
             :value="value.melody"
             @input="updateProperty('melody', $event.target.value)">
    </p>
  </div>
  <app-rule-dropdown :value="value.rule"
                     @input="updateProperty('rule', $event)">
  </app-rule-dropdown>
  <hr style="margin-top: 36px;">
  <div style="margin-bottom: 24px; height: 45px;"
       v-for="note in Math.min(outputs.length, instruments.length)">
    <h2 class="title has-text-centered">{{ outputs[note-1] }}</h2>
  </div>
</div>
</template>

<script>
import RuleDropdown from './RuleDropdown'
import api from '../../api/index'

export default {
  props: {
    value: Object
  },
  computed: {
    instruments () {
      return this.$store.getters.instrumentOrder
    },
    isValidChord () {
      return api.isValidChord(this.value.chord)
    },
    isValidNote () {
      return api.isValidNote(this.value.melody)
    },
    outputs () {
      let chord = this.value.chord
      let melody = this.value.melody
      let rule = this.value.rule
      let instruments = this.instruments
      return api.voicing(chord, melody, rule, instruments)
    }
  },
  methods: {
    updateProperty (property, value) {
      this.value[property] = value
      this.$emit('input', this.value)
    },
    remove () {
      this.$emit('remove', this.value.id)
    }
  },
  components: {
    'app-rule-dropdown': RuleDropdown
  }
}
</script>

<style lang="css" scoped>
</style>
