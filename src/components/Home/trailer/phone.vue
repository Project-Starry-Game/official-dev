<template>
  <div class="home">
    <div class="butter_logo_phone_container">
      <v-img class="butter_logo_phone" :src="butterflylogo" cover />
    </div>

    <v-img class="butter_background" cover :src="bg_builder" />

    <div class="butter_scoll_container">
      <v-btn @click="scrollToNextSection()" color="transparent" elevation="0">
        <a class="scroll_btn" id="scroll_btn"></a>
      </v-btn>
      <p id="scrolldown_text">{{ $t("scrollDown") }}</p>
    </div>

    <div class="scrolldown_box_phone">
      <v-btn @click="scrollToNextSection()" color="transparent" elevation="0">
        <a class="scroll_btn" id="scroll_btn"></a>
      </v-btn>
      <p id="scrolldown_text">{{ $t("scrollDown") }}</p>
    </div>

    <div class="butter_text_container">
      <p>{{ $t("trialerIntro.section_phone_one") }}</p>
      <br />
      <p>{{ $t("trialerIntro.section_phone_two") }}</p>
      <p>{{ $t("trialerIntro.section_phone_three") }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import bg_builder from "../../../assets/compression_img/sm_img/bgwithcc_sm.png";
import butterflylogo from "../../../assets/logo_shadow.png";
</script>

<script lang="ts">
export default {
  setup() {},

  mounted() {
    // var h = window.innerHeight;
    // document.getElementById("trailer_phone").style.height = h + "px";
  },

  methods: {
    scrollToNextSection() {
      this.$emit("on-change");
    },
  },
};
</script>

<style>
.home {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.butter_logo_phone_container {
  position: absolute;
  top: 0;
  padding: 0;
  margin: 0;
  width: 100vw;
  z-index: 100;
}
.butter_logo_phone {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  top: 15vh;
}
.butter_background {
  height: 100%;
}
.butter_text_container {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-self: center;
  top: 55vh;
  padding: 0;
  margin: 0;
  width: 100vw;
  z-index: 100;
  color: rgb(255, 255, 255);
  font-weight: bolder;
}
.butter_scoll_container {
  position: absolute;
  top: 90%;
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 10000;
}
.butter_scroll_btn {
  height: 0.6rem;
  width: 0.6rem;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  animation: move-down 2s infinite;
  margin-top: -1rem;
}
a#scroll_btn {
  height: 0.6rem;
  width: 0.6rem;
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

p#scrolldown_text {
  font-size: 0.6rem;
  color: #fff;
}
</style>
