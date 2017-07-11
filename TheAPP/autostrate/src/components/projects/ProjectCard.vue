<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Name
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="columns">
          <div class="column is-6">
            <h5>Key: Am</h5>
            <h5>Length: 5</h5>
          </div>
          <div class="column is-6">
            <h5>Instruments:</h5>
            <ul>
              <li>Trumpet</li>
              <li>Alto Sax</li>
              <li>Tenor Sax</li>
              <li>Trombone</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item">Open</a>
      <a class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'ProjectCard'
}
</script>
<style scoped>
</style>
