<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <app-project-card></app-project-card>
        </div>
        <div class="column">
          <app-project-card></app-project-card>
        </div>
        <div class="column">
          <app-project-card></app-project-card>
        </div>
        <div class="column">
          <app-new-project></app-new-project>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from './ProjectCard'
import NewProject from './NewProject'
export default {
  name: 'Projects',
  data: () => ({

  }),
  components: {
    'app-project-card': ProjectCard,
    'app-new-project': NewProject
  }
}
</script>

<style scoped>
</style>
