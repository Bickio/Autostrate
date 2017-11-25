<template>
  <div class="card" style="height: 100%;">
    <header class="card-header" style="height: 42px;">
      <p class="card-header-title">
        {{name}}
      </p>
    </header>
    <div class="card-content" style="height: calc(100% - 85px)">
      <div class="content">
        <div class="columns is-desktop">
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
      <a class="card-footer-item"
         @click="remove">Delete</a>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'projects-card',
  props: {
    id: {
      type: String,
      required: true
    }
  },
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
    },
    remove () {
      this.$store.commit('removeProject', this.id)
    }
  }
}
</script>
<style scoped>
</style>
