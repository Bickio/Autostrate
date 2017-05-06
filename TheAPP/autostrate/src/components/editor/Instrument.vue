<template lang="html">
  <div class="row no-gutters text-center">
    <div class="col-2">
      <input type="text" class="instrument-name form-control
                                invisible-text-input text-center"
             v-model="value.name">
    </div>
    <div class="col-1"
         v-for="note in value.notes">
      <div class="card output-box">
       <p class="output-text">{{ note }}</p>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style lang="css" scoped>
.output-text {
  background-image: none;
  color: rgb(70, 74, 76);
  cursor: default;
  font-size: 1.25rem;
  line-height: 25px;
  margin: 0px;
  padding: 8px 12px;
  width: 100%;
}
.instrument-name {
  font-size: 1.75rem;
  font-family: 'Roboto', sans-serif;
}
.invisible-text-input {
  border-radius: .25rem;
  background: transparent;
  border: none;
  height: 38px;
  width: 100%;
}
.invisible-text-input:focus {
  background-color: #EEE;
  outline: none;
  border: #5cb3fd solid 1px;
  height: 38px;
  width: 100%;
  -webkit-box-shadow: inset 1px 1px 3px 0px rgba(0,0,0,0.41);
  -moz-box-shadow: inset 1px 1px 3px 0px rgba(0,0,0,0.41);
  box-shadow: inset 1px 1px 3px 0px rgba(0,0,0,0.41);
}
</style>
