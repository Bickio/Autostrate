<template>
  <div class="grid-template content">
    <div id="grid-ttl">
      <h1 class="has-text-centered white-text text-shadow">Autostrate</h1>
      <h4 class="has-text-centered white-text text-shadow">A harmonization tool</h4>
      <h5 class="has-text-centered white-text text-shadow">Version 0.3</h5>
    </div>
    <img id="grid-bgi" src="http://lorempixel.com/1920/1080/technics/4">

    <h3 id="grid-hdg" class="has-text-centered">Features</h3>

    <h4 id="grid-fh1" class="has-text-centered">Transposition</h4>
    <p id="grid-fp1">Transpose any instrument to any key or octave. Save your trumpets the
    pain of reading a concert chart.</p>
    <img id="grid-fi1" src="http://lorempixel.com/350/240/technics/5">

    <h4 id="grid-fh2" class="has-text-centered">Chord recognition</h4>
    <p id="grid-fp2">Lorem ipsum dolor sit amet, consectetur adipisicing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <img id="grid-fi2" src="http://lorempixel.com/350/240/technics/6">

    <h4 id="grid-fh3" class="has-text-centered">Lorem ipsum</h4>
    <p id="grid-fp3">Lorem ipsum dolor sit amet, consectetur adipisicing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <img id="grid-fi3" src="http://lorempixel.com/350/240/technics/7">

    <h4 id="grid-fh4" class="has-text-centered">Lorem ipsum</h4>
    <p id="grid-fp4">Lorem ipsum dolor sit amet, consectetur adipisicing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <img id="grid-fi4" src="http://lorempixel.com/350/240/technics/8">

    <h3 id="grid-qtt" class="has-text-centered">"It looks really nice"</h3>
    <h4 id="grid-qta" class="has-text-centered">-Me</h4>

    <button id="grid-btn" type="button" class="button is-primary">Get Started</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      version: 0.3
    }
  }
}
</script>

<style scoped>
.white-text {
  color: beige;
}
.text-shadow {
  text-shadow: 1px 1px 3px rgba(0,0,0,0.58);
}

.grid-template {
  display: inline;
  grid-template: repeat(20, auto) / 1fr;
}



#grid-ttl {
  grid-area: ttl;
  background-color: rgba(0, 0, 0, 0.4);
  color: rgba(255, 255, 255);
}
#grid-bgi {
  grid-area: 1 / 1 / 2 / 2;
  z-index: -4;
}
#grid-vsn {
  grid-area: vsn;
}
#grid-hdg {
  grid-area: hdg;
}
#grid-fh1 {grid-area: fh1;}
#grid-fh2 {grid-area: fh2;}
#grid-fh3 {grid-area: fh3;}
#grid-fh4 {grid-area: fh4;}

#grid-fp1 {grid-area: fp1;}
#grid-fp2 {grid-area: fp2;}
#grid-fp3 {grid-area: fp3;}
#grid-fp4 {grid-area: fp4;}

#grid-fi1 {grid-area: fi1;}
#grid-fi2 {grid-area: fi2;}
#grid-fi3 {grid-area: fi3;}
#grid-fi4 {grid-area: fi4;}

#grid-hrl {
  grid-area: hrl;
}

#grid-qtt {
  grid-area: qtt;
}

#grid-qta {
  grid-area: qta;
}

#grid-btn {
  grid-area: btn;
}

@media all and (min-width: 800px) {
  .grid-template {
    display: grid;
    grid-gap: 10px;
    grid-template: repeat(10, auto) / repeat(4, 1fr);
    grid-template-areas:
      "... ... ... ..."
      "ttl ttl ttl ttl"
      "... btn btn ..."
      "... ... ... ..."
      "hdg hdg hdg hdg"
      "fh1 fh2 fh3 fh4"
      "fp1 fp2 fp3 fp4"
      "fi1 fi2 fi3 fi4"
      "... qtt qtt ..."
      "... qta qta ...";
  }
  #grid-bgi {
    grid-area: 1 / 1 / 5 / 5;
    width: 100vw;
    height: 100vh;
  }
}
</style>
