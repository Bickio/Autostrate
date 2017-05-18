<template lang="html">
  <div class="container">
    <h1 class="title">{{ name }}</h1>
    <div class="columns is-multiline is-gapless">
      <app-headers></app-headers>
      <app-column v-for="(column, key) in columns" key="id" @input="updateColumn(key)" v-model="columns[key]"></app-column>
      <div class="column is-1">
        <button type="button" name="button" class="button is-primary" @click="addColumn">Add Column</button>
      </div>
    </div>
  </div>
</template>

<script>
import Column from './Column'
import { mapGetters } from 'vuex'
import ColumnHeaders from './ColumnHeaders'

export default {
  components: {
    'app-column': Column,
    'app-headers': ColumnHeaders
  },
  computed: mapGetters([
    'currentProjectID',
    'columns',
    'name'
  ]),
  methods: {
    addColumn () {
      this.$store.commit('addColumn', this.currentProjectID)
    },
    updateColumn (key) {
      let projectID = this.currentProjectID
      let column = this.columns[key]
      this.$store.commit('updateColumn', [projectID, key, column])
    }
  }
}
</script>

<style lang="css">
</style>
