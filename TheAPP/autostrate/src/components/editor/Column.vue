<template lang="html">
<div class="column is-1">
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
             :value="value.chord"
             @input="updateProperty('chord', $event.target.value)">
    </p>
  </div>
  <div class="field">
    <p class="control">
      <input class="input"
             :value="value.melody"
             @input="updateProperty('melody', $event.target.value)">
    </p>
  </div>
  <app-rule-dropdown :value="value.rule"
                     @input="updateProperty('rule', $event)">
  </app-rule-dropdown>
  <hr style="margin-top: 36px;">
  <div style="margin-bottom: 24px; height: 45px;"
       v-for="instrumentOutput in instrumentOutputs">
    <h2 class="title has-text-centered">{{ instrumentOutput }}</h2>
  </div>
</div>
</template>

<script>
import RuleDropdown from './RuleDropdown'
export default {
  props: {
    value: Object,
    instrumentOutputs: Object
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
