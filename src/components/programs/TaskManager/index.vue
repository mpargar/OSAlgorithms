<template>
    <div class="container">
        <!-- eslint-disable -->
        <div class="section">
            <div class="top">
                <div>
                    <label>Algoritmo: </label>
                    <select class="formElements" v-model="option">
                        <option value="1">FCFS - First Came First Service</option>
                        <option value="2">SJF - Short Job First</option>
                        <option value="3">SRT - Shorter Remaining Time</option>
                        <option value="4">RR - Round Robin</option>
                        <option value="5">PP - Per Priority</option>
                    </select>
                </div>
                <div class="botonera">
                    <button class="formElements" @click="go()">
                        Iniciar
                    </button>
                    <button class="formElements" @click="clear()">
                        Limpiar
                    </button>
                </div>
            </div>
            <ul class="procesos" v-if="processes.length">
                <li v-for="(e, i) in processes">
                    <div>
                        <img :src="require(`@/assets/icons/${e.image.name}.${e.image.ext}`)">
                        {{ e.name }}
                    </div>
                    <span>Rafaga: <input type="text" v-model="e.rafaga" :size="e.rafaga.length">ms</span>
                    <span>Llegada: {{ i==0? 0 : e.created - processes[0].created }}ms</span>
                </li>
            </ul>
            <div class="procesos error" v-else>
                No hay procesos
            </div>
            <ul class="gant" v-if="gant.length">
                <li v-for="(e, i) in gant" :style="`width:${e.lim[1] - e.lim[0]}%;`">
                    <div class="gantImg">
                        <img :src="require(`@/assets/icons/${e.image.name}.${e.image.ext}`)">
                    </div>
                    <div class="lims">
                        <span>
                            {{ e.lim[0] }}
                        </span>
                        <span>
                            {{ e.lim[1] }}
                        </span>
                    </div>
                </li>
            </ul>
            <ul class="promedios" v-if="processesCopy.length">
                <li>Promedios</li>
                <li><span>Tiempo de espera:</span> {{tEp}} </li>
                <li><span>Tiempo de respuesta:</span> {{tRp}} </li>
                <li><span>Eficiencia:</span> {{eficP}} %</li>
            </ul>
        </div>
    </div>
</template>
 
<script>
 /* eslint-disable */
    export default {
        name: "TaskManager",
        props: [
            'processes'
        ],
        data(){
            return {
                option: '1',
                processesCopy: [],
                gant: [],
                tEp: 0,
                tRp: 0,
                eficP: 0,
                 

            }
        },
        created(){

        },
        mounted(){

        },
        methods:{
            clear(){
                this.gant = Object.assign([], [])
                this.processesCopy = Object.assign([], [])
                this.tEp = 0
                this.tRp = 0
                this.eficP = 0
            },
            go(){
                switch (this.option) {
                    case '1':
                        this.fcfs()            
                        break;
                    case '2':
                        this.sjf()
                        break;
                    case '3':
                        
                        break;
                    case '4':
                        
                        break;
                    case '5':
                        
                        break;
                }
            },
            fcfs(){
                this.clear()
                var _this = this
                this.processesCopy = Object.assign([], this.processes)
                this.gant = this.processesCopy.map((e, i, a) => {
                    e.lim = i==0? [0, parseInt(e.rafaga)] : [parseInt(a[i-1].lim[1]),(parseInt(a[i-1].lim[1]) + parseInt(e.rafaga))]
                    e.tE = e.lim[0]
                    e.tR = e.lim[1]
                    e.efic = (parseInt(e.rafaga) / e.tR)*100
                    return e
                })
                this.processesCopy = this.gant;
                this.processesCopy.forEach(e => {
                    _this.tEp += parseFloat(e.tE)
                    _this.tRp += parseFloat(e.tR)
                    _this.eficP += parseFloat(e.efic)
                })
                
                this.tEp = this.tEp / this.processesCopy.length
                this.tRp = this.tRp / this.processesCopy.length
                this.eficP = (this.eficP / this.processesCopy.length).toFixed(2)
            },
            sjf(){
                this.clear()
                var _this = this
                this.processesCopy = Object.assign([], this.processes)
                this.processesCopy.sort(function(a, b) {
                    return a.rafaga - b.rafaga;
                });
                this.gant = this.processesCopy.map((e, i, a) => {
                    e.lim = i==0? [0, parseInt(e.rafaga)] : [parseInt(a[i-1].lim[1]),(parseInt(a[i-1].lim[1]) + parseInt(e.rafaga))]
                    e.tE = e.lim[0]
                    e.tR = e.lim[1]
                    e.efic = (parseInt(e.rafaga) / e.tR)*100
                    return e
                })
                this.processesCopy = this.gant;
                this.processesCopy.forEach(e => {
                    _this.tEp += parseFloat(e.tE)
                    _this.tRp += parseFloat(e.tR)
                    _this.eficP += parseFloat(e.efic)
                })
                this.tEp = this.tEp / this.processesCopy.length
                this.tRp = this.tRp / this.processesCopy.length
                this.eficP = (this.eficP / this.processesCopy.length).toFixed(2)
            }
        }
    }
</script>
 
 <style lang="scss" scoped>
    *{
        -webkit-user-select: none;
        cursor: default;
    }
    .container{
        width: 100%;
        padding: 10px;
        .section{
            background: white;
            width: calc(100% - 10px);
            margin: 10px auto;
            padding: 5px;
            .top{
                padding-bottom: 10px;
                margin-bottom: 10px;
                border-bottom: 1px solid #e1e1e1;
                display: flex;
                justify-content: space-between;
                >div{
                    label{
                        margin-right: 5px;
                    }
                    button{
                        &:first-child{
                            margin-right: 5px;
                        }
                    }
                }
            }
            .error{
                text-align: center;
            }
            .procesos{
                padding-bottom: 10px;
                margin-bottom: 10px;
                border-bottom: 1px solid #e1e1e1;
                display: flex;
                flex-direction: column;
                >li{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 5px;
                    >*{
                        flex-grow: 1;
                        max-width: 154px;
                        overflow: hidden;
                        margin: 0 5px;
                        display: flex;
                        align-items: center;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    &:hover{
                        background: #cce4f7;
                    }
                    >div{
                        img{
                            max-width: 15px;
                            margin-right: 5px;
                        }
                    }
                    >span{
                        display: flex;
                        align-items: baseline;
                        input{
                            width: auto;
                            display: inline;
                            min-width: 0;
                            margin: 0 5px;
                            cursor: auto;
                            border: none;
                            padding: 0;
                            align-items: baseline;
                        }
                    }
                }
            }
            .gant{
                list-style: none;
                display: flex;
                padding-bottom: 10px;
                margin-bottom: 10px;
                border-bottom: 1px solid #e1e1e1;
                li{
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    justify-items: center;
                    align-content: center;
                    align-items: center;
                    padding: 5px;
                    &:first-child{
                        border-right: 0;
                    }
                    &:nth-child(even){
                        background: #e5f1fb;
                    }
                    &:hover{
                        background: #cce4f7;
                    }
                    >.gantImg{
                        display: flex;
                        width: 100%;
                        flex-grow: 8;
                        justify-content: center;
                        align-items: center;
                        >img{
                            max-width: 50%;
                        }
                    }
                    >.lims{
                        display: flex;
                        flex-grow: 1;
                        width: 100%;
                        justify-content: space-between;
                        align-items: flex-end;
                        >span{
                            font-size: 11px;
                        }
                    }
                }
            }
            .promedios{
                list-style: none;
                >li{
                    padding: 10px;
                    display: flex;
                    justify-content: space-between;
                    &:nth-child(even){
                        background: #e5f1fb;
                    }
                    &:hover{
                        background: #cce4f7;
                    }
                    &:first-child{
                        text-align: center;
                        text-transform: uppercase;
                        justify-content: center;
                        font-weight: 700;
                        &:hover{
                            background: none;
                        }
                    }
                }
            }
        }
    }
 </style>
 
 