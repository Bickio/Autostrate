<template lang="html">
<div class="column is-2">
  <div class="field">
    <br class="title">
  </div>
  <div class="field">
    <h1 class="title">Chords</h1>
  </div>
  <div class="field">
    <h1 class="title">Melody</h1>
  </div>
  <div class="columns is-gapless field" style="margin-bottom: 0;">
    <div class="column">
      <h1 class="title">Rule</h1>
    </div>
    <app-rule-dropdown class="column"
                       :value="projectDefaultRule"
                       @input="updateProjectDefaultRule($event)">
    </app-rule-dropdown>
  </div>
  <hr>
</div>
</template>

<script>
import RuleDropdown from './RuleDropdown'
export default {
  computed: {
    projectDefaultRule () {
      return this.$store.getters.projectDefaultRule
    }
  },
  methods: {
    updateProjectDefaultRule (rule) {
      let projectId = this.$store.getters.currentProjectId
      this.$store.commit('updateProjectDefaultRule', [projectId, rule])
    }
  },
  components: {
    'app-rule-dropdown': RuleDropdown
  }
}
</script>

<style lang="css" scoped>

</style>
