<template>
  <v-container
    class="ma-0 pa-0 trailer_container overflow-y-auto"
    fluid
    id="scroll-target"
  >
    <div class="section section-1" id="first" ref="first">
      <v-img class="logo" ref="logo" src="@/assets/logo_shadow.png" />
    </div>
    <div class="img_container" v-scroll:#scroll-target="onScroll">
    
      <v-img
        class="foreground"
        id="foreground"
        ref="foreground"
        src="@/assets/character.png"
      />
      <v-img
        class="background"
        id="background"
        ref="background"
        src="@/assets/building.png"
      />
    </div>



    <div class="section section-2" ref="second" >
  
      <div class="section2_container">
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
import { ref, onMounted, onUnmounted } from 'vue'
export default {
  name: "Home",
  data: () => ({
    offsetTop: 0,
  }),
  components: {},
  // setup() {
  //   const canvas = document.getElementById("scroll-target");
  //   context = canvas.getContext('2d');  

  //   onMounted(() => {
      
  //     background_img = new Image();
  //     background_img.src = "assets/building.png";
  //     canvas.height=500
  //     canvas.width=400
  //     context.drawImage(background_img, 100, 100);

  //   })
  //   return{
  //     canvas,
  //   }


  // },
  
  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
      
      var trailer_container = document.getElementById("scroll-target");
      const maxScrollTop = trailer_container.scrollHeight - window.innerHeight;
      // const maxBackgroundSize = 150;
      // const backgroundSize = this.offsetTop / (maxBackgroundSize - 100);
      var bk = document.getElementById("background");
      
      // bk.style.transform = "scale(" + (100 + backgroundSize * 5) / 100 + ")";
      background.style.transform = "scale(" + (1 + Math.pow((this.offsetTop / maxScrollTop ), 2))  + ")";
      console.log(this.offsetTop);
      console.log(trailer_container.scrollHeight);

      first.style.opacity =
      (300 - (this.offsetTop + window.innerHeight - first.offsetHeight)) / 100
    },
  },
};
</script>

<style>

.trailer_container {
  background: #2e231b;
  overflow: scroll;
  overflow-x: hidden;
  height: 100vh;
  width:  100vw;
}
/* .trailer_container::-webkit-scrollbar {
  display: none;
} */
.img_container{
  z-index: 10;
  top: 0%;
}
.background {
  position: sticky;
  
  opacity: 30%;
  top: 0%;
  
}
.foreground {
  position: sticky;
  top: 0%;
  
}
.section {
  background-image: linear-gradient(to bottom, #1e140d 70%, #9c8c83 250%);
  height: 100vh;

  
  /* margin-top: -50%; */
  
  color: #f2ca95;
  display: flex;
  align-items: center;
  justify-content: center;
  
  z-index: 300;
}
.logo {
  height: 50vh;
}

.section2_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
