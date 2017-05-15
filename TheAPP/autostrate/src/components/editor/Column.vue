<template lang="html">
<div class="column is-1">
  <div class="thing">
    {{ column.id }}
  </div>

</div>
</template>

<script>
export default {
  props: ['column']
}
</script>

<style lang="css">
.thing {
  background-color: blue;
}
</style>
