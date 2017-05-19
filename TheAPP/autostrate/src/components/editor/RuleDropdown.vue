<template lang="html">
  <div class="field">
    <p class="control">
      <span class="select"
            style="width: 100%;">
        <select style="width: 100%;"
                :value="value"
                @input="update($event.target.value)">
          <option v-for="rule in rules"
                  :value="rule.id">{{ rule.name }}
          </option>
        </select>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    update (value) {
      this.$emit('input', this.rules[value])
    }
  },
  computed: {
    rules () {
      return this.$store.getters.rules
    }
  }
}
</script>

<style lang="css">
</style>
