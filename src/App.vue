<template>
  <div id="app">
    <!-- <WindowFrame
      :config="{
        title: 'Sin título',
        icon: 'mc.png',
        width: 500,
        height: 500,
        posx: 0,
        posy: 0,
      }"/> -->
    <WindowsMenu
      :softwareProp="software"/>
    <StateBar/>
  </div>
</template>

<script>
/* eslint-disable */
import Drive from './objects/Drive.js'
// import Drive from './objects/File.js'
import StateBar from './components/StateBar.vue'
import WindowFrame from './components/WindowFrame.vue'
import WindowsMenu from './components/Menu.vue'

export default {
  name: 'app',
  components: {
    StateBar,
    WindowFrame,
    WindowsMenu
  },
  data: () => ({
    software: Drive.loadDefaultSoftware(),
    opened: ["Hola"]
  }),
  created(){
    for(let i in this.software){
      this.software[i]
    }
  },
  mounted: function () {
  }
}
</script>

<style>

@font-face {
    font-family: 'Segoe UI';
    src: url('./assets/fonts/Segoe UI.ttf');
}

* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Segoe UI';
  background-image: url('./assets/img/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  overflow: hidden;
}
img{
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>