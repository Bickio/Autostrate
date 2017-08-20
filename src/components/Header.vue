<template lang="html">
  <nav class="nav has-shadow">
    <div class="nav-left">
      <a class="nav-item">
        <img src="../assets/autostrate.png" alt="Autostrate logo">
      </a>
    </div>

    <div class="nav-center">
      <a class="nav-item"
         href="https://github.com/Bickio/Autostrate"
         target="_blank">
        <span class="icon">
          <i class="fa fa-github"></i>
        </span>
      </a>
    </div>

    <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
    <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
    <span class="nav-toggle" @click="navMenuOn = !navMenuOn">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <!-- This "nav-menu" is hidden on mobile -->
    <!-- Add the modifier "is-active" to display it on mobile -->
    <div class="nav-right nav-menu"
         :class="{'is-active': navMenuOn}"
         @click="navMenuOn = false">
      <router-link :to="'/'"
                   exact
                   class="nav-item is-tab"
                   tag='a'>
        Home
      </router-link>
      <router-link :to="'/projects'"
                   class="nav-item is-tab"
                   tag='a'>
        Projects
      </router-link>
      <router-link :to="'/editor'"
                   class="nav-item is-tab"
                   tag='a'>
        Editor
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      navMenuOn: false
    }
  }
}
</script>

<style lang="css">
</style>
