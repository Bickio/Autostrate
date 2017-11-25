<template lang="html">
<div class="column is-1-desktop
                   is-2-tablet
                   is-3-mobile">
  <div class="field has-text-centered">
    <a class="button is-outlined is-primary" @click="insert">
      <span class="icon is-small">
        <i class="fa fa-arrow-down"></i>
      </span>
    </a>
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
             :value="column.chord"
             @input="updateProperty('chord', $event.target.value)">
    </p>
  </div>
  <div class="field">
    <p class="control">
      <input class="input"
             :class="{ 'is-danger': !isValidNote }"
             :value="column.melody"
             @input="updateProperty('melody',
                                    capitaliseFirstLetter($event.target.value))">
    </p>
  </div>
  <app-rule-dropdown :value="column.rule"
                     :error="error"
                     @input="updateProperty('rule', $event)"
                     style="margin-bottom: 13px">
  </app-rule-dropdown>
  <hr style="margin: 28px 0;">
  <div style="margin-bottom: 21px; height: 45px; padding-top: 7px;"
       v-for="id in instrumentOrder">
    <h2 class="title has-text-centered">{{ outputs[id] }}</h2>
  </div>
</div>
</template>

<script>
import RuleDropdown from './RuleDropdown'
import Api from '../../api/index'
import { mapGetters } from 'vuex'

export default {
  name: 'editor-column',
  components: {
    'app-rule-dropdown': RuleDropdown
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      error: ''
    }
  },
  computed: {
    ...mapGetters([
      'currentProjectId',
      'instrumentOrder',
      'instruments',
      'columns'
    ]),
    column () {
      return this.columns[this.id]
    },
    isValidChord () {
      return Api.isValidChord(this.column.chord)
    },
    isValidNote () {
      return Api.isValidNote(this.column.melody)
    },
    outputs () {
      let chord = this.column.chord
      let melody = this.column.melody
      let rule = this.column.rule
      let instruments = this.instruments
      var voicing
      try {
        voicing = new Api().voicing(chord, melody, rule, instruments)
        this.error = ''
      } catch (error) {
        this.error = error.message
        voicing = Array(Object.keys(instruments).length).fill('')
      }
      return voicing
    }
  },
  methods: {
    updateProperty (property, value) {
      let column = this.column
      column[property] = value
      this.$store.commit('updateColumn',
                         [this.currentProjectId, this.id, this.column])
    },
    remove () {
      this.$store.commit('removeColumn', [this.currentProjectId, this.id])
    },
    insert () {
      this.$store.commit('insertColumnBeforeId', [this.currentProjectId, this.id])
    },
    capitaliseFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
