<template lang="html">
  <div class="container">
    <div class="d-flex">
      <app-column :bar="bars[0]"></app-column>
    </div>
  </div>
</template>

<script>
import Headers from './Headers'
import Column from './Column'
import Box from './Box'
import { mapGetters } from 'vuex'
import store from '../../store/index'
export default {
  data () {
    return {
      project: 1
    }
  },
  computed: {
    ...mapGetters([
      'getProject'
    ]),
    name () {
      return this.getProject(this.project).name
    },
    bars () {
      return this.getProject(this.project).bars
    }
  },
  methods: {
    changeName (name) {
      store.dispatch('changeName', [this.project, name])
    }
  },
  components: {
    appHeaders: Headers,
    appColumn: Column,
    appBox: Box
  }
}
</script>

<style lang="css">
</style>
