<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-3"
             v-for="id in projectOrder">
          <app-project-card :id="id"></app-project-card>
        </div>
        <div class="column is-3">
          <app-new-project></app-new-project>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from './ProjectCard'
import NewProject from './NewProject'
import { mapGetters } from 'vuex'

export default {
  name: 'Projects',
  data: () => ({

  }),
  computed: {
    ...mapGetters(['projectOrder'])
  },
  components: {
    'app-project-card': ProjectCard,
    'app-new-project': NewProject
  }
}
</script>

<style scoped>
</style>
