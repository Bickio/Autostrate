<template>
  <div class="content has-text-centered">
    <h1>{{msg}}!!!</h1>
    <h2>
      This is version {{version}}
    </h2>
    <div class="level">
      <div class="level-item">
        <div class="has-text-left">
          <hr>
          <h3>
            Changelog:
          </h3>
          <ul>
            <li>New voicing added: 4-part close</li>
            <li>Both close and drop-2 voicings support specified octaves</li>
            <li>Instrument transpositions support specified octaves relative to C4</li>
            <li>Voicing rule box will go red if the input is invalid</li>
            <li>Hovering over the voicing rule box will give you a hint about what's wrong</li>
          </ul>
          <hr>
        </div>
      </div>
    </div>

    <h2 class="title is-3">To get started click the 'editor' button</h2>
  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Autostrate',
      version: 0.3
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
