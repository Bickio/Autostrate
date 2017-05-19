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
  <hr>
</div>
</template>

<script>
import RuleDropdown from './RuleDropdown'
export default {
  props: {
    value: Object
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
