<template>
  <div class="container has-text-centered">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{msg}}!!!</h1>
          <h2 class="subtitle">
            This is version {{version}}
          </h2>
        </div>
      </div>
      <h2 class="title is-3">To get started click the 'editor' button</h2>
    </section>
  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Autostrate',
      version: 0.1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
