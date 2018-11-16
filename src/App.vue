<template>
<!-- eslint-disable -->
  <div id="app">
    <WindowFrame
      :config="{
        title: 'Administrador de tareas',
        icon: 'admin.png',
        width: 800,
        height: 525,
        processes: processes,
        program: 'taskManager'
      }"
      :processes="processes" />
    <template v-for="(e, i) in processes">
      <WindowFrame
        :key="i"
        :config="{
          title: e.name,
          icon: e.image.name+'.'+e.image.ext,
          width: 300,
          height: 300,
          processId: i,
          processes: processes
        }" />
    </template>
    <WindowsMenu
      :softwareProp="software"
      :processes="processes"/>
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
    processes: [],
    frameZindexCounter: 0
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

<style lang="scss">

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

.formElements{
  outline: none;
  background: #e1e1e1;
  border: 1px solid #adadad;
  color: black;
  padding: 5px;
  &:hover{
    background: #e5f1fb;
    border-color: #0078d7;
  }
  &:active{
    background: #cce4f7;
    border-color: #005499;
  }
  option{
    background: white;
  }
}
</style>