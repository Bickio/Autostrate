<template lang="html">
  <div class="outer-box">
    <div  v-if="!editable" class="form-control text-center text-box display-box">
      <slot class="">{{ value }}</slot>
    </div>
    <input type="text"
           class="form-control text-center text-box input-box"
           v-if="editable"
           :value="value"
           @input="updateText($event.target.value)">
  </div>
</template>

<script>
export default {
  props: {
    editable: {
      type: Boolean,
      default: false
    },
    value: String
  },
  methods: {
    updateText (text) {
      this.$emit('input', text)
    }
  }
}
</script>

<style lang="css" scoped>
.outer-box {
  width: 100px;
}
.text-box {
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  width: 100%;
}
.display-box {
  cursor: default;
}
</style>
