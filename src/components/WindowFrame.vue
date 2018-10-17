<template>
    <div class="window" ref="windowFrame" :style="`top: ${config.posy}px; left: ${config.posx}px; width: ${config.width}px; height: ${config.height}px;`">
      <!-- Barra -->
        <div class="windowBar" ref="windowFrameHeader">
          <!--  -->
            <div class="windowName">
                <img :src="require(`@/assets/icons/${config.icon}`)">
                <span>{{ config.title }}</span>
            </div>
            <!-- Botonera -->
            <ul class="windowButtons">
                <li>
                    <svg width="696" height="64" viewBox="0 0 696 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="696" height="64" fill="black"/>
                    </svg>
                </li>
                <li>
                   <svg width="690" height="687" viewBox="0 0 690 687" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="631" width="575" height="56" fill="black"/>
                        <rect y="115" width="576" height="56" fill="black"/>
                        <rect x="115" width="575" height="56" fill="black"/>
                        <rect x="528" y="516" width="160" height="56" fill="black"/>
                        <rect y="115" width="58" height="572" fill="black"/>
                        <rect x="115" y="22" width="58" height="113" fill="black"/>
                        <rect x="518" y="119" width="58" height="564" fill="black"/>
                        <rect x="632" y="1" width="58" height="571" fill="black"/>
                    </svg>
                </li>
                <li>
                    <svg width="714" height="714" viewBox="0 0 714 714" fill="black" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.861084 667.884L668.325 0.419538L713.58 45.6744L46.1159 713.139L0.861084 667.884Z"/>
                        <path d="M0.861084 667.884L668.325 0.419538L713.58 45.6744L46.1159 713.139L0.861084 667.884Z"/>
                        <path d="M668.325 713.139L0.861189 45.6744L46.116 0.419588L713.58 667.884L668.325 713.139Z"/>
                        <path d="M668.325 713.139L0.861189 45.6744L46.116 0.419588L713.58 667.884L668.325 713.139Z"/>
                    </svg>
                </li>
            </ul>
        </div>
        <div class="windowBody">
            <img :src="require(`@/assets/icons/${config.icon}`)">
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'WindowFrame',
  props: [
      'config'
  ],
  data: () => ({
    // TODO: Setear las variables y obtenerlas por props
    wW: 0,
    wH: 0
  }),
  created() {
      this.wW = window.document.body.clientWidth
      this.wH = window.document.body.clientHeight

      this.config.posx = (this.wW / 2) - (this.config.width / 2)
      this.config.posy = ((this.wH - 50) / 2) - (this.config.height / 2)

  },
  methods: {
      dragElement: function(elmnt) {

        var _this = this
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0
        
        if (this.$refs.windowFrameHeader) {
            // if present, the header is where you move the DIV from:
            this.$refs.windowFrameHeader.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:                
            elmnt.style.top = (
                (elmnt.offsetTop - pos2 < 0)
                ? 0
                : ((elmnt.offsetTop - pos2 > _this.wH - 80)
                    ? (_this.wH - 80)
                    : (elmnt.offsetTop - pos2))
            ) + "px";
            elmnt.style.left = (
                (elmnt.offsetLeft - pos1 <  (elmnt.clientWidth * -1) + 150 )
                ? ((elmnt.clientWidth * -1) + 150)
                : ((elmnt.offsetLeft - pos1 > _this.wW - 30)
                    ?(_this.wW - 30)
                    :(elmnt.offsetLeft - pos1))
            ) + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
  },
  mounted()  {   
    this.dragElement(this.$refs.windowFrame)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .window {
        position: absolute;
        max-width: 100%;
        min-width: 180px;
        min-height: 80px;
        padding: 1px;
        padding: 0 5px 0; 
        resize: both;
        overflow: hidden;
        z-index: 99;
    }

    .window > .windowBar{
        min-height: 30px;
        max-height: 30px;
        background: white;
        width: 100%;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: space-between;
    }

    .window > .windowBar > .windowName{
        user-select: none;
        cursor: default;
        padding-left: 15px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: flex;
        align-items: center;
        align-content: center;

    }

    .window > .windowBar > .windowName > img{
        max-width: 15px;
        max-height: 15px;
        margin-right: 5px;
    }

    .window > .windowBar > .windowButtons{
        list-style: none;
        display: flex;
        align-content: center;
        align-items: center;
        height: 30px;
    }
    
    .window > .windowBar > .windowButtons > li {
        height: 30px;
        padding: 0 15px;
        display: flex;
        align-items: center;
        align-content: center;
        transition: all ease-in-out 0.1s;
        background: white;
    }

    .window > .windowBar > .windowButtons > li > svg {
        transition: all ease-in-out 0.1s;
    }

    .window > .windowBar > .windowButtons > li:hover {
        background: #ececec;
    }

    .window > .windowBar > .windowButtons > li:active {
        background: #cacacb;
    }

    .window > .windowBar > .windowButtons > li:last-child:hover {
        background: #e81123;
    }
    
    .window > .windowBar > .windowButtons > li:last-child:active {
        background: #f1707a;
    }

    .window > .windowBar > .windowButtons > li:last-child:hover > svg{
        fill: white;
    }

    .window > .windowBar > .windowButtons > li > svg {
        max-width: 10px;
        max-height: 10px;
    }
    .window > .windowBody {
        background: #ececec;
        display: flex;
        height: 100%;
        min-height: 50px;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
    }
    .window > .windowBody > img {
        width: auto;
        max-height: 50px;
    }
    
    /* TODO: Agregar on click a los estilos de la ventana */


</style>
