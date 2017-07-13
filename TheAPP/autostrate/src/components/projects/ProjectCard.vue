<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{name}}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="columns">
          <div class="column is-6">
            <h5>Key: {{key}}</h5>
            <h5>Length: {{length}} bars</h5>
          </div>
          <div class="column is-6">
            <h5>Instruments:</h5>
            <ul>
              <li v-for="instrumentName in instrumentNames">{{instrumentName}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item"
         @click="open">Open</a>
      <a class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>
<script>
export default {
  props: ['id'],
  name: 'ProjectCard',
  computed: {
    name () {
      return this.$store.getters.projectNameById(this.id)
    },
    key () {
      return this.$store.getters.projectKeyById(this.id)
    },
    length () {
      return this.$store.getters.columnOrderById(this.id).length
    },
    instrumentNames () {
      let order = this.$store.getters.instrumentOrderById(this.id)
      let instruments = this.$store.getters.instrumentsById(this.id)
      let output = []
      for (let id of order) {
        output.push(instruments[id].name)
      }
      return output
    }
  },
  methods: {
    open () {
      this.$store.commit('setCurrentProject', this.id)
      this.$router.push('editor')
    }
  }
}
</script>
<style scoped>
</style>
