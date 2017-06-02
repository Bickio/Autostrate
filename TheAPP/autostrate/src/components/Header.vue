<template lang="html">
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <a class="nav-item title is-3">
          Autostrate
        </a>
      </div>
      <div class="nav-right nav-menu">
        <router-link class="nav-item is-tab" to="/" exact>Home</router-link>
        <router-link class="nav-item is-tab" to="/editor">Editor</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css">
html,body {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
}
</style>
