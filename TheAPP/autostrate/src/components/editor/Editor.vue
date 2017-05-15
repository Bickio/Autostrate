<template lang="html">
  <div class="container">
    <h1 class="title is-1">{{ currentProjectID }}</h1>
    <div class="columns is-multiline">
      <div v-for="column in columns">
        <app-column :column="column"></app-column>
      </div>
    </div>
    {{ columns }}
    <button type="button" name="button" @click="addColumn">Add Column</button>
  </div>
</template>

<script>
import Column from './Column'
import { mapGetters } from 'vuex'

export default {
  components: {
    'app-column': Column
  },
  computed: mapGetters([
    'currentProjectID',
    'columns'
  ]),
  methods: {
    addColumn () {
      this.$store.commit('addColumn', this.currentProjectID)
    }
  }
}
</script>

<style lang="css">
</style>
