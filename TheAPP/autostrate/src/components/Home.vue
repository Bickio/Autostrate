<template>
  <div class="content has-text-centered">
    <h1>{{msg}}!!!</h1>
    <h2>
      This is version {{version}}
    </h2>
    <h3>
      Changelog:
    </h3>
    <li>Columns now have an insert button</li>
    <li>Columns and instruments have smooth transitions</li>
    <li>Several small fixes</li>
    <h2 class="title is-3">To get started click the 'editor' button</h2>
  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Autostrate',
      version: 0.2
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
