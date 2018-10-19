<template>
<!-- eslint-disable -->
  <div ref="windowsMenu" :class="'menu' + opened">
    <!-- Windows Button -->
    <div class="options">
        TEST
    </div>
    <ul class="programs">
        <li v-for="(e) in software" @click="addToProcesses(e)">
            <div class="contentContainer">
                <span class="optionImg">
                    <img :src="require(`@/assets/icons/${e.image.name}.${e.image.ext}`)">
                </span>
                <span class="text">
                    {{ e.name }}
                </span>
            </div>
        </li> 
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: [
      'softwareProp',
      'processes'
  ],
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
  },
  methods: {
      addToProcesses(e){
          let element = Object.assign({}, e);
          element.created = new Date()
          this.processes.push(element)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    *{
        -webkit-user-select: none;
        cursor: default;
    }
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
        .options{
            height: 100%;
            width: 70px;
        } 
        .programs{
            height: 100%;
            width: 100%;
            padding: 5px;
            >li{
                display: flex;
                align-items: center;
                margin: 6px 0;
                padding: 5px;
                &:hover{
                    background: rgba(255, 255, 255, 0.354);
                }
                &:active{
                    .contentContainer{
                        transform: scale(0.98);
                    }
                }
                .contentContainer{
                    display: flex;
                    align-items: center;
                    .optionImg{
                        background: #00b7c3;
                        width: 40px;
                        height: 40px;
                        display: flex;
                        justify-items: center;
                        justify-content: center;
                        align-items: center;
                        align-content: center;
                        margin-right: 10px;
                        >img{
                            max-width: 35px;
                            max-height: 35px;
                        }
                    }
                    .text{
                        color: white;
                        font-size: 14px;
                    }
                }
            }
        }
    }
    .opened{
        height: 500px;
        opacity: 1;
    }

    
</style>