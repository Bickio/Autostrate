<template lang="html">
  <div class="container">
    <br>
    <app-meta></app-meta>
    <div class="columns is-multiline is-gapless">
      <app-column-headers></app-column-headers>
      <app-column v-for="(id, index) in columnOrder"
                  :key="index"
                  @input="updateColumn(id)"
                  @remove="removeColumn"
                  v-model="columns[id]"></app-column>
      <app-add-bar @addColumn="addColumn"></app-add-bar>
    </div>
  </div>
</template>

<script>
import Column from './Column'
import { mapGetters } from 'vuex'
import ColumnHeaders from './ColumnHeaders'
import AddBar from './AddBar'
import Meta from './Meta'

export default {
  computed: {
    ...mapGetters([
      'currentProjectId',
      'columns',
      'columnOrder'
    ])
  },
  methods: {
    addColumn () {
      this.$store.commit('addColumn', this.currentProjectId)
    },
    updateColumn (key) {
      let projectId = this.currentProjectId
      let column = this.columns[key]
      this.$store.commit('updateColumn', [projectId, key, column])
    },
    removeColumn (id) {
      let projectId = this.currentProjectId
      this.$store.commit('removeColumn', [projectId, id])
    },
    updateDefaultRule (rule) {
      let projectId = this.currentProjectId
      this.$store.commit('updateDefaultRule', [projectId, rule])
    }

  },
  components: {

    'app-meta': Meta,
    'app-column-headers': ColumnHeaders,
    'app-column': Column,
    'app-add-bar': AddBar
  }
}
</script>

<style lang="css">
</style>
