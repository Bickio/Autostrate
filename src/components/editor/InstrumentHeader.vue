<template lang="html">
  <div class="columns is-mobile is-gapless">
    <div class="column is-narrow field has-text-centered">
      <a class="button is-danger is-outlined is-medium" @click="remove">
        <span class="icon is-small">
          <i class="fa fa-times"></i>
        </span>
      </a>
    </div>
    <div class="field column">
      <p class="control">
        <input class="input is-medium"
               type="text"
               placeholder="Name"
               :value="instrument.name"
               @input="updateProperty('name', $event.target.value)">
      </p>
    </div>
    <div class="field column is-3">
      <p class="control">
        <input class="input is-medium"
               :class="{ 'is-danger': !isValidKey }"
               type="text"
               placeholder="Key"
               :value="instrument.key"
               @input="updateProperty('key', $event.target.value)">
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '../../api/index'
export default {
  name: 'editor-instrumentHeaders',
  props: {
    instrument: {
      type: Object,
      required: true,
      validator: function (value) {
        for (let attr in ['name', 'key', 'id']) {
          if (!(attr in Object.keys(value))) {
            return false
          }
          return true
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'currentProjectId'
    ]),
    isValidKey () {
      return api.isValidKey(this.instrument.key)
    }
  },
  methods: {
    updateProperty (property, value) {
      let projectId = this.currentProjectId
      let instrumentId = this.instrument.id
      this.$store.commit('updateInstrumentProperty',
                         [projectId, instrumentId, property, value])
    },
    remove () {
      let projectId = this.currentProjectId
      let instrumentId = this.instrument.id
      this.$store.commit('removeInstrument',
                         [projectId, instrumentId])
    }
  }
}
</script>

<style lang="css" scoped>
</style>
