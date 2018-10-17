<template>
  <div class="bar">
    <!-- Windows Button -->
    <span id="windowsLogo" @click="startButton = !startButton" :class="startButton?'active':''">
      <svg width="1988" height="1992" viewBox="0 0 1988 1992" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M816 170L0 286V950H816V170Z"/>
        <path d="M1988 0L914 154V950L1988 938V0Z"/>
        <path d="M1988 1048H914V1836L1988 1992V1048Z"/>
        <path d="M816 1048L0 1038V1710L816 1824V1048Z"/>
      </svg>
    </span>
    <!-- Search -->
  </div>
</template>

<script>
export default {
  name: 'Bar',
  data: () => ({
    startButton: false
  }),
  watch: {
    startButton: function() {
      this.$root.$emit('start-button-pressed', this.startButton)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bar {
  position: fixed;
  width: 100vw;
  height: 50px;
  background: rgba(0, 0, 0, 0.88);
  bottom: 0;
  display: flex;
  align-content: center;
  align-items: center;
}

/* BOTON */
#windowsLogo {
  transition: all ease-in-out 0.2s;
  background: rgba(255, 255, 255, 0); 
  height: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  padding: 0 15px;
}

#windowsLogo > svg{
  transition: all ease-in-out 0.2s;
  max-height: 19px;
  max-width: 19px;
}

#windowsLogo:hover {
  background: rgba(255, 255, 255, 0.354);
}

#windowsLogo:active {
  background: rgba(255, 255, 255, 0.197);
}

#windowsLogo.active {
  background: rgba(255, 255, 255, 0.400);
}

#windowsLogo:hover > svg {
  fill: #5CDCE6;
}

#windowsLogo:active > svg {
  fill: #00b7c3;
}

</style>
