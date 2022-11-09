<template>
<v-container 
    class="ad_container ma-0 pa-0 overflow-y-auto"
    fluid
    id="scroll-target"> 
    <div class="box box2" v-scroll:#scroll-target="onScroll">
        <v-img class="background" id="background" ref="background" src="@/assets/building.png" />
        <v-img class="foreground" ref="foreground" src="@/assets/character.png" />
    </div>
    <div class="text_section">
        <v-img class="section-1" id="first" ref="first" src="@/assets/logo_shadow.png" />
        <div class="section-2" id="second" ref="second">
            <p>Swallow the Black liquid, tell me what you see.</p>
            <p>
            A beautiful world with silence? A broken coffin ?Or even just that
            empty bottle in your hand.
            </p>
        </div>
    </div>
</v-container>
  
</template>

<script>
export default {
    name: "Home",
    data: () => ({
        offsetTop: 0,   
    }),
    components: {},
    methods: {
        onScroll(e) {
        var bk = document.getElementById("background");
        this.offsetTop = e.target.scrollTop;
      
        first.style.opacity =
        1- (this.offsetTop /(e.target.scrollHeight - window.innerHeight))

        second.style.opacity =
        (this.offsetTop /(e.target.scrollHeight - window.innerHeight))
        
        bk.style.transform = "scale(" + (1 + Math.pow((e.target.scrollTop /window.innerHeight ), 2))  + ")";
        console.log(this.offsetTop / e.target.scrollHeight)
        }
      
    },
}

</script>

<style>
.ad_container{
    position: relative;
    height: 100vh;
    overflow: scroll;
    overflow-x: hidden;    
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

.section-1{
    background-image: linear-gradient(to bottom, #3b2210 70%, #9c8c83 180%);
    width: 50vw;
    height: 50vh;
    z-index: 500;
    opacity: 100%;
}

.section-2{
    width: 100vw;
    position:absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0%;
}

.box2{
    /* background: #b97e4f; */
    position: absolute;
    top: 0%;
}
.background{
    width: 100vw;
}

</style>