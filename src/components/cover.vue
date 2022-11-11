<template>
<v-container 
    class="ad_container ma-0 pa-0 overflow-y-auto"
    fluid
    id="scroll-target"> 
    <div class="box" v-scroll:#scroll-target="onScroll">
        <v-img class="background" id="background" ref="background" src="@/assets/bgwithcc.png" />
        <!-- <v-img class="foreground" ref="foreground" src="@/assets/character.png" /> -->
    </div>
    <v-row class="text_section">
        <div class="img_section" id="first">
            <v-img class="section-1" id="section-1" ref="first" src="@/assets/logo_shadow.png" />
        </div>
        
        <div class="section-2" id="second" ref="second">
            <p>Swallow the Black liquid, tell me what you see.</p>
            <p>
            A beautiful world with silence? A broken coffin ?Or even just that
            empty bottle in your hand.
            </p>
        </div>
    </v-row>
</v-container>
  
</template>

<script>
// import { lineRadial } from 'd3-shape';
import * as d3 from 'd3';

export default {
    name: "Home",
    data: () => ({
        offsetTop: 0,   
    }),
    components: {},
    mounted() { 
    

    },
    methods: {
        onScroll(e) {
        var bk = document.getElementById("background");
        var section_1 = document.getElementById("section-1");
        this.offsetTop = e.target.scrollTop;
        const aaa = d3.scaleLinear()
            aaa.domain([0, (e.target.scrollHeight)]);
            aaa.range([0, 1]);
            // console.log(aaa)
      
        // if(e.target.scrollTop > window.innerHeight*2){
        //     e.target.scrollTop = window.innerHeight*2          
        // }
        first.style.opacity =
        1- (this.offsetTop /(e.target.scrollHeight - window.innerHeight))



        // second.style.opacity =
        // (this.offsetTop /(e.target.scrollHeight - window.innerHeight))

        // bk.style.transform = "scale(" + (1  + aaa ) + ")";
        // bk.style.transform = "scale(" + (1 + (e.target.scrollTop /window.innerHeight ) )  + ")";
        bk.style.transform = "scale(" + (1 + Math.pow((e.target.scrollTop /window.innerHeight),0.1 ) )  + ")";
        console.log(e.target.scrollTop /window.innerHeight)
        // console.log(bk.style.transform )
        },


    },
}

</script>

<style>
.ad_container{
    position: relative;
    height: 100vh;
    /* overflow: scroll; */
    overflow-x: hidden;    
}
.ad_container::-webkit-scrollbar {
  display: none;
}

.text_section{
    display: flex;
    position: absolute;
    justify-content: center; 
    align-items: center;
    
    top: 0%;
    width: 100vw;
    min-height: 100vh;
    /* opacity: 10%; */
    z-index: 300;
}
.img_section{
    background-image: linear-gradient(to bottom,rgba(46, 35, 27,1), rgba(46, 35, 27,0));
    width: 100vw;
    height: 100vh;
}
.section-1{
    
    width: 30vw;
    height: 30vh;
    z-index: 500;
    opacity: 100%;
    top: 45%;
    left: 50%;
    transform: translate(-50%,-50%);
    
}

.section-2{
    width: 100vw;
    position:sticky;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 100%;
   
}

.box{
    /* background: #b97e4f; */
    position: absolute;
    max-height:130vh;
    width: 100vw;
    top: 0%;
}
.background{
    min-width: 100vw;
}

</style>