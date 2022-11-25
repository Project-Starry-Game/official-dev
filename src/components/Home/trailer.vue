<template>
  <div>
    <v-container
      fluid
      v-scroll:#scroll-target="onScroll"
      id="scroll-target"
      class="ad_container overflow-y-auto pa-0 ma-0"
    >
    <!-- <v-row
      justify="center"
      align="center"
    >
        <v-subheader class="sub pa-5">Offset Top  {{ offsetTop }} </v-subheader>
    </v-row> -->

    <!-- logo -->
  
      <div class="img_container" id="logo_box">
        <div class="img_logo" id="img_logo" >
          <v-img class="logo" id="logo" ref="first" :src="butterflylogo" />
          
        </div>
      </div>
    <!-- building_img -->
      <div class="background_box">
        <v-img
          class="background"
          id="background"
          ref="background"
          :src="bg_builder"
        />
        
      </div>


    <!-- text -->
    <div
      class="text_section"
      id="text_section"
    >
      <p>Swallow the Black liquid, tell me what you see.</p>
      <p>
        A beautiful world with silence? A broken coffin ?Or even just that
        empty bottle in your hand.
      </p>

    </div>
  
      <div class="scrolldown_box">
          <a class="scroll-btn" href="#goDowntoLobby"></a>
        </div>
    </v-container>
  </div>
</template>

<script setup>
import bg_builder from "@/assets/bgwithcc.png";
import butterflylogo from "@/assets/logo_shadow.png";
</script>

<script>
export default {
  data: () => ({
    offsetTop: 0,
  }),

  methods: {
    onScroll(e) {
      var bk = document.getElementById("background");
      var logo_box = document.getElementById("logo_box");
      var img_logo = document.getElementById("img_logo");
      var text_section = document.getElementById("text_section");
      var halfposition = (e.target.scrollHeight - window.innerHeight) * 0.5

      this.offsetTop = e.target.scrollTop;
      console.log(this.offsetTop);
      console.log(halfposition);
      console.log(text_section.style.opacity)

      logo_box.style.opacity =
        1 - this.offsetTop / (e.target.scrollHeight - window.innerHeight)*1.5;

      if (this.offsetTop < halfposition){
        text_section.style.opacity = 0
      } else{
          text_section.style.opacity =
            ((this.offsetTop - halfposition )/ (e.target.scrollHeight - window.innerHeight - halfposition)); 
      }

      

      img_logo.style.transform =
        "scale(" +
        1 -
        this.offsetTop / (e.target.scrollHeight - window.innerHeight) +
        ")";

      // img_logo.style.transform =
      //   "scale(" +
      //   1 - this.offsetTop / (e.target.scrollHeight - window.innerHeight) +
      //   ")";
    },
  },
};
</script>

<style>
.trailer {
  overflow: hidden;
}
.ad_container {
  /* border: 2px solid rgb(144, 6, 6) ; */
  position: relative;
  top: 0%;
  /* overflow: scroll; */
  overflow-x: hidden;
  max-height: 100vh;
}
.rect{
  min-width: 100vw;
  height: 80vh;

}
.img_container {
  display: flex;
  justify-content: center;
  position: sticky;
  top: 10%; /* 移到上面 */
  width: 100vw;
  /* height: 100vh; */

  /* background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 33%,
    rgba(46, 35, 27, 0) 100%
  ); */
  z-index: 100;
}
.img_logo {
  /* transform: scale(0.5); */
  position: relative;
  /* top: 10%; */
  /* background-color: rgba(255, 129, 129, 0.6); */
  width: 30%;
}

.background_box{
  /* border: 2px solid rgb(144, 6, 6) ; */
  width: 100vw;
  height: auto;
  position: absolute;
  top: 0%;
  z-index: 10;
}

.text_section {
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 43%,
    rgba(46, 35, 27, 0) 100%
  );
  color: rgb(254, 255, 249);
  width: 100vw;
  height: 100vh;
  display: flex;
  position: sticky;
  top: 0%;
  z-index: 1000;
  opacity: 0%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sub {
  z-index: 1000;
}
.scrolldown_box{
  position: absolute;
  /* bottom: 1%; */
  width: 100vw;
  height: auto;
  background-color: rgb(157, 157, 157);
  display: flex;
  justify-content: center;
  z-index: 10000;
}

.scroll-btn{
  height: 1rem;
  width: 1rem;
  background-color: aquamarine;
  border-radius: 50%;
}
</style>
