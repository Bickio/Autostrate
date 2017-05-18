<template lang="html">
<div class="column is-1">
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
  <div class="field">
    <p class="control">
      <span class="select">
        <select>
          <option>Rule</option>
          <option>drop-2blah</option>
        </select>
      </span>
    </p>
  </div>
</div>
</template>

<script>
export default {
  props: {
    value: Object
  },
  methods: {
    updateProperty (property, value) {
      this.value[property] = value
      this.$emit('input', this.value)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
