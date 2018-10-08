<template>
    <div class="window" ref="window">
      <!-- Barra -->
        <div class="windowBar">
          <!--  -->
            <div class="windowName">
                <span>Titulo</span>
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
    </div>
</template>

<script>
export default {
  name: 'Window',
  data: () => ({
    openedSoftware: []
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .window {
        position: absolute;
        width: 100vw;
        max-width: 500px;
        min-width: 50px;
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
        transition: all ease-in-out 0.2s;
        background: white;
    }

    .window > .windowBar > .windowButtons > li > svg {
        transition: all ease-in-out 0.2s;
    }

    .window > .windowBar > .windowButtons > li:hover {
        background: #ececec;
    }

    .window > .windowBar > .windowButtons > li:last-child:hover {
        background: #e81123;
    }

    .window > .windowBar > .windowButtons > li:last-child:hover > svg{
        fill: white;
    }

    .window > .windowBar > .windowButtons > li > svg {
        max-width: 10px;
        max-height: 10px;
    }

</style>
