<template>
  <div>
    <v-container
      fluid
      id="scroll-target"
      class="overflow-y-auto ma-0 pa-0"
      v-scroll:#scroll-target="onScroll"
    >
      <div class="background">
        <v-img
          class="background"
          id="background"
          ref="background"
          :src="bg_builder"
        />
      </div>
      <div class="img_container" id="logo_box">
        <div class="img_logo">
          <v-img class="logo" id="logo" ref="first" :src="butterflylogo" />
        </div>
      </div>
      <div style="background-color: black">
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
  name: "Home",
  data: () => ({
    offsetTop: 0,
  }),
  components: {},
  mounted() {},
  methods: {
    onScroll(e) {
      var bk = document.getElementById("background");
      var logo_box = document.getElementById("logo_box");
      var logo = document.getElementById("logo");
      var text_section = document.getElementById("text_section");
      this.offsetTop = e.target.scrollTop;

      console.log(logo.style.transform);
      logo_box.style.opacity =
        1 - this.offsetTop / (e.target.scrollHeight - window.innerHeight);
      logo.style.transform =
        "scale(" +
        this.offsetTop / (e.target.scrollHeight - window.innerHeight) +
        ")";

      text_section.style.opacity =
        (this.offsetTop / (e.target.scrollHeight - window.innerHeight)) * 2;
    },
  },
};
</script>

<style>
.ad_container {
  position: relative;
  /* overflow: scroll; */
  overflow-x: hidden;
  max-height: 100vh;
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
  /* background-color: rgb(, 0, 0); */
  color: white;
  width: 100vw;
  height: 100vh;
  /* position: sticky; */
  bottom: 0px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 100%;
}
</style>
