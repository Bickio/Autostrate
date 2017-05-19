<template lang="html">
  <div class="container">
    <h1 class="title is-1">{{ name }}</h1>
    <div class="columns is-multiline is-gapless">
      <app-headers></app-headers>
      <app-column v-for="(column, key) in columns" key="id" @input="updateColumn(key)" v-model="columns[key]"></app-column>
      <app-add-bar @addColumn="addColumn"/>
    </div>
  </div>
</template>

<script>
import Column from './Column'
import { mapGetters } from 'vuex'
import ColumnHeaders from './ColumnHeaders'
import AddBar from './AddBar'

export default {
  components: {
    'app-column': Column,
    'app-headers': ColumnHeaders,
    'app-add-bar': AddBar
  },
  computed: mapGetters([
    'currentProjectId',
    'columns',
    'name'
  ]),
  methods: {
    addColumn () {
      this.$store.commit('addColumn', this.currentProjectId)
    },
    updateColumn (key) {
      let projectId = this.currentProjectId
      let column = this.columns[key]
      this.$store.commit('updateColumn', [projectId, key, column])
    },
    updateDefaultRule (rule) {
      let projectId = this.currentProjectId
      this.store.commit('updateDefaultRule', [projectId, rule])
    }
  }
}
</script>

<style lang="css">
</style>
