<template>
  <v-container
    id="scroll-target"
    class="overflow-y-auto trailer pa-0 ma-0"
    v-scroll:#scroll-target="onScroll"
    fluid
  >
    <div class="img_container" id="logo_box">
      <div class="img_logo" id="img_logo">
        <v-img :src="butterflylogo" />
      </div>
    </div>
    <div class="background_box">
      <v-img :src="bg_builder" />
      <div class="scrolldown_box">
        <a class="scroll-btn" id="scroll-btn" href="#goDowntoLobby"> </a>
        <div class="scrolldown_text">Scroll Down</div>
      </div>
    </div>
    <div class="text_section" id="text_section">
      <p>Swallow the Black liquid, tell me what you see.</p>
      <p>
        A beautiful world with silence? A broken coffin ?Or even just that empty
        bottle in your hand.
      </p>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import bg_builder from "../../assets/bgwithcc.png";
import butterflylogo from "../../assets/logo_shadow.png";
</script>

<script lang="ts">
export default {
  setup() {},

  mounted() {
    console.log("mounted");
  },

  data: () => ({
    offsetTop: 0,
  }),

  methods: {
    onScroll(e) {
      var bk = document.getElementById("background");
      var logo_box = document.getElementById("logo_box");
      var img_logo = document.getElementById("img_logo");
      var text_section = document.getElementById("text_section");
      var halfposition = (e.target.scrollHeight - window.innerHeight) * 0.5;

      this.offsetTop = e.target.scrollTop;
      console.log(this.offsetTop);
      console.log(halfposition);
      console.log(text_section.style.opacity);

      logo_box.style.opacity =
        1 -
        (this.offsetTop / (e.target.scrollHeight - window.innerHeight)) * 1.5;

      if (this.offsetTop < halfposition) {
        text_section.style.opacity = 0;
      } else {
        text_section.style.opacity =
          (this.offsetTop - halfposition) /
          (e.target.scrollHeight - window.innerHeight - halfposition);
      }

      img_logo.style.transform =
        "scale(" +
        1 -
        this.offsetTop / (e.target.scrollHeight - window.innerHeight) +
        ")";
    },
  },
};
</script>

<style>
.trailer {
  position: relative;
  top: 0%;
  overflow-x: hidden;
  max-height: 100vh;
}

.img_container {
  display: flex;
  justify-content: center;
  position: sticky;
  top: 10%; /* 移到上面 */
  width: 100vw;
  z-index: 100;
}
.img_logo {
  position: relative;
  width: 30%;
}
.background_box {
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
  height: 90vh;
  display: flex;
  position: sticky;
  top: 0%;
  z-index: 1000;
  opacity: 0%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;
}
.scrolldown_box {
  position: absolute;
  bottom: 1%;
  width: 100vw;
  height: 6vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
}
a#scroll-btn {
  height: 1rem;
  width: 1rem;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  animation: move-down 2s infinite;
  margin-top: -1rem;
}
@keyframes move-down {
  50% {
    opacity: 0;
  }
  100% {
    transform: translateY(1.5rem);
    opacity: 0;
  }
}
.scrolldown_text {
  font-size: 1rem;
  color: #fff;
}
</style>
