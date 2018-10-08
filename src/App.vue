<template>
  <div id="app">
    <WindowFrame/>
    <StateBar/>
  </div>
</template>

<script>
import Drive from './objects/Drive.js'
import StateBar from './components/StateBar.vue'
import WindowFrame from './components/WindowFrame.vue'

export default {
  name: 'app',
  components: {
    StateBar,
    WindowFrame
  },
  data: () => ({
    software: Drive.loadDefaultSoftware(),
    opened: ["Hola"]
  }),
  mounted: function () {
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-image: url('./assets/img/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}
</style>