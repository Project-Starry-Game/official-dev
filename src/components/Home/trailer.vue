<template>
    <v-container
      fluid
      id="scroll-target"
      v-scroll:#scroll-target="onScroll"
      class="ad_container overflow-y-auto pa-0 ma-0"
    >
    <v-row
      justify="center"
      align="center"
    >
        <v-subheader class="sub pa-5">Offset Top  {{ offsetTop }} </v-subheader>
    </v-row>
  
      <div class="background">
        <v-img
          class="background"
          id="background"
          ref="background"
          :src="bg_builder"
        />
      </div>

      <!-- logo -->
       <div class="img_container" id="logo_box">
        <div class="img_logo" id="img_logo" >
          <v-img class="logo" id="logo" ref="first" :src="butterflylogo" />
        </div>
      </div>

      <!-- test -->
      <div
        class="text_section"
        id="text_section"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <p>Swallow the Black liquid, tell me what you see.</p>
        <p>
          A beautiful world with silence? A broken coffin ?Or even just that
          empty bottle in your hand.
        </p>
      </div>
      

    </v-container>
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
      onScroll (e) {
      var bk = document.getElementById("background");
      var logo_box = document.getElementById("logo_box");
      var img_logo = document.getElementById("img_logo");
      var text_section = document.getElementById("text_section");


      console.log(e);

      this.offsetTop = e.target.scrollTop
      console.log( text_section.style.opacity )

      logo_box.style.opacity =
        1 - this.offsetTop / (e.target.scrollHeight - window.innerHeight);

      img_logo.style.transform =
        "scale(" +
        1 - this.offsetTop / (e.target.scrollHeight - window.innerHeight) +
        ")";

      text_section.style.opacity =
        (this.offsetTop / (e.target.scrollHeight - window.innerHeight));
        
    
      // img_logo.style.transform =
      //   "scale(" +
      //   1 - this.offsetTop / (e.target.scrollHeight - window.innerHeight) +
      //   ")";
      },
    },
  }
</script>

<style>
.trailer {
  overflow: hidden;
}
.ad_container {
  position: relative;
  /* overflow: scroll; */
  overflow-x: hidden;
  max-height: 90vh;
}
.img_container {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0px; /* 移到上面 */
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 33%,
    rgba(46, 35, 27, 0) 100%
  );
  z-index: 10;
}
.img_logo {
  /* transform: scale(0.5); */
  position: relative;
  top: 20%;
  /* background-color: rgba(255, 129, 129, 0.6); */
  width: 30%;
}
.text_section {
  background-color:#000;
  opacity: 0%;
  color: rgb(255, 255, 255);
  width: 100vw;
  height: 80vh;
  position: sticky;
  bottom: 100%;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sub{
  
  z-index: 1000;
}
</style>