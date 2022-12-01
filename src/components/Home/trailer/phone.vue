<template>
  <v-container class="trailer pa-0 ma-0" fluid>
    <div class="butter_logo_container pa-0 ma-0">
      <v-img :src="butterflylogo" class="butter_logo" />
    </div>
    <div class="butter_bg">
      <v-img :src="bg_builder" />
    </div>
    <div class="scrolldown_box">
      <v-btn @click="scrollToNextSection()" color="transparent" elevation="0">
        <a class="scroll-btn" id="scroll-btn"></a>
      </v-btn>
      <div class="scrolldown_text">Scroll Down</div>
    </div>
    <div class="text_section_phone">
      <p>Swallow the Black liquid, tell me what you see.</p>
      <p>
        A beautiful world with silence? A broken coffin ?Or even just that empty
        bottle in your hand.
      </p>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import bg_builder from "../../../assets/bgwithcc.png";
import butterflylogo from "../../../assets/logo_shadow.png";
</script>

<script lang="ts">
export default {
  setup() {},

  mounted() {},

  methods: {
    scrollToNextSection() {
      this.$emit("on-change", { id: "goDowntoLobby", fade: true });
    },
  },
};
</script>

<style>
.trailer {
  position: relative;
  top: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  max-height: 100vh;
}
.butter_logo_container {
  position: absolute;
  top: 0;
  padding: 0;
  margin: 0;
  width: 100vw;
  z-index: 100;
}
.butter_logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  top: 10vh;
}
.butter_bg {
  top: 0;
  margin: auto;
}
.text_section_phone {
}
.scrolldown_box {
  position: absolute;
  bottom: 10vh;
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
