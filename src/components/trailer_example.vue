<template>
  <v-container 
    class="ma-0 pa-0 ad_container overflow-y-auto"
    fluid 
    id="scroll-target"
    v-scroll:#scroll-target="onScroll"
  >
    <div class="background">

      <v-img class="background" id="background" ref="background" src="@/assets/bgwithcc.png" />

        
    </div>
    <div class="img_container">
      
      <div class="img_logo">
        <v-img class="logo" id="logo" ref="first" src="@/assets/logo_shadow.png" />
      </div>
      
      
    </div>
    <div class="text_section" id="text_section">
      <p>Swallow the Black liquid, tell me what you see.</p>
      <p>
        A beautiful world with silence? A broken coffin ?Or even just that
        empty bottle in your hand.
      </p>
    </div>
  </v-container >

</template>


<script>

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
      var logo = document.getElementById("logo");
      var text_section = document.getElementById("text_section");
      this.offsetTop = e.target.scrollTop;

      logo.style.opacity =
      1- (this.offsetTop /(e.target.scrollHeight - window.innerHeight))

      text_section.style.opacity =
        (this.offsetTop /(e.target.scrollHeight - window.innerHeight)*2)
      }
    },

}
</script>

<style >
/* div{
  border: 3px solid black;
  padding: 30px;
  height: 300px;
} */
.ad_container{
  position: relative;
  /* overflow: scroll; */
  overflow-x: hidden;
  max-height: 100vh;
}
.img_container{
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0px;
  background-color: rgb(0, 0, 0,0.5);
  z-index: 10; 

}
.img_logo{
  /* transform: scale(0.5); */
  position: relative;
  top: 30px;
  /* background-color: rgba(255, 129, 129, 0.6); */
  width: 30%;
}
.text_section{
  background-color: rgb(243, 132, 213);
  width: 100vw;
  /* position: sticky; */
  bottom: 0px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0%;
}
</style>

