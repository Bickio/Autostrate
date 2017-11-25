<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-3"
             v-for="id in projectOrder">
          <app-project-card :id="id"/>
        </div>
        <div class="column is-3">
          <app-project-new/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from './Card'
import New from './New'
import { mapGetters } from 'vuex'

export default {
  name: 'app-projects',
  components: {
    'app-project-card': Card,
    'app-project-new': New
  },
  computed: {
    ...mapGetters(['projectOrder'])
  }
}
</script>

<style scoped>
</style>
