<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'app',
  components: {
    appHeader: Header
  }
}
</script>

<style>
html,body {
    width: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
}
</style>
