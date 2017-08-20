<template lang="html">
  <div class="columns">
    <div class="field column">
      <p class="control has-icons-right">
        <input class="input is-medium"
               placeholder="Project Name"
               :value="projectName"
               @input="updateProperty('name', $event.target.value)">
        <span class="icon is-medium is-right">
          <i class="fa fa-pencil"></i>
        </span>
      </p>
    </div>
    <div class="field column">
      <p class="control has-icons-right">
        <input class="input is-medium"
               placeholder="Key"
               :value="projectKey"
               @input="updateProperty('key', $event.target.value)">
        <span class="icon is-medium is-right">
          <i class="fa fa-pencil"></i>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'currentProjectId',
      'projectName',
      'projectKey'
    ])
  },
  methods: {
    updateProperty (property, value) {
      let projectId = this.currentProjectId
      this.$store.commit('updateProjectProperty', [projectId, property, value])
    }
  }
}
</script>

<style lang="css">
</style>
