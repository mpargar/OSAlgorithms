<template>
  <div :class="'menu' + opened">
    <!-- Windows Button -->
    <div class="options">
        TEST
    </div>
    <ul class="programs">
        <li v-for="(e) in software">
            <!-- <img :src="require(`@/assets/icons/${e.image.name}${e.image.ext}`)"> -->
            <span>
                {{ e.name }}
            </span>
        </li> 
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: ['softwareProp'],
  data: function() {
    return {
        opened: '',
        software: this.softwareProp
    }
  },
  mounted(){
       /* eslint-disable */
      var _this = this
      this.$root.$on('start-button-pressed', (emision) => {
          _this.opened = emision? ' opened' : ''
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .menu{
        background: rgba(0, 0, 0, 0.88);
        position: fixed;
        width: 390px;
        height: 0;
        left: 0;
        bottom: 50px;
        overflow: hidden;
        transition: all ease 0.1s;
        opacity: 0;
        z-index: 99;
        display: flex;
    }
    .opened{
        height: 500px;
        opacity: 1;
    }
    .menu > .options{
        height: 100%;
        width: 70px;
    }
    .menu > .programs{
        height: 100%;
        width: 100%;
    }

    .menu > .programs > li{
        display: flex;
    }
    .menu > .programs > li > span{
        color: white;
    }
    
</style>