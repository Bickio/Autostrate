<template lang="html">
  <div class="columns is-gapless">
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
export default {
  props: ['instrument'],
  computed: mapGetters([
    'currentProjectId'
  ]),
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

<style lang="css">
</style>
