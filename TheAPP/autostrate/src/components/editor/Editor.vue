<template lang="html">
  <div class="container">
    <br>
    <app-meta></app-meta>
    <transition-group class="columns is-mobile is-multiline is-gapless column-list"
                      tag="div"
                      name="list">
      <app-column-headers key="h"
                          class="list-item"></app-column-headers>
      <app-mobile-headers key="mh"
                          class="list-item"></app-mobile-headers>
      <app-column v-for="(id, index) in columnOrder"
                  class="list-item"
                  :key="id"
                  :id="id"></app-column>
      <app-add-bar @pushColumn="pushColumn"
                   class="list-item"
                   key="ab"></app-add-bar>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Column from './Column'
import ColumnHeaders from './ColumnHeaders'
import AddBar from './AddBar'
import Meta from './Meta'
import MobileHeaders from './MobileHeaders'

export default {
  computed: {
    ...mapGetters([
      'currentProjectId',
      'columns',
      'columnOrder'
    ])
  },
  methods: {
    pushColumn () {
      this.$store.commit('pushColumn', this.currentProjectId)
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
    'app-mobile-headers': MobileHeaders,
    'app-meta': Meta,
    'app-column-headers': ColumnHeaders,
    'app-column': Column,
    'app-add-bar': AddBar
  }
}
</script>

<style lang="css" scoped>
.column-list {
  overflow: hidden;
}
.list-item {
  transition: all 0.2s;
}
.list-enter, .list-leave-to {
  opacity: 0;
}
.list-leave-to {
  width: 0;
  height: 0;
  overflow: hidden;
}
</style>
