<template>
  <div class="trailer_phone d-flex flex-column" id="trailer_phone">
    <div class="butter_logo_container pa-0 ma-0">
      <v-img :src="butterflylogo" class="butter_logo" cover />
    </div>

    <div class="butter_bg">
      <v-img class="butter_bg" id="butter_bg" cover :src="bg_builder" />
    </div>
    <div class="scrolldown_box_phone">
      <v-btn @click="scrollToNextSection()" color="transparent" elevation="0">
        <a class="scroll_btn" id="scroll_btn"></a>
      </v-btn>
      <p id="scrolldown_text">{{ $t("scrollDown") }}</p>
    </div>
    <div class="text_section_phone">
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
    var h = window.innerHeight;
    document.getElementById("trailer_phone").style.height = h + "px";
  },

  methods: {
    scrollToNextSection() {
      this.$emit("on-change");
    },
  },
};
</script>

<style>
.trailer_phone {
  position: relative;
  top: 0;
  /* border: 1px solid rgb(255, 140, 0); */
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100vw;
  height: 100vh;
  max-height: -webkit-fill-available;
  margin-bottom: -300px;
  /* background-color: rgb(230, 207, 207); */
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
  top: 15vh;
}
.butter_bg {
  height: 100vh;
  max-height: -webkit-fill-available;
  object-position: center bottom;
}
.text_section_phone {
  /* border: 1px solid seagreen; */
  height: 65%;
  width: 100%;
  margin: 1%;
  font-weight: bold;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-self: center;
  /* font-size: 1.5rem; */
  color: rgb(255, 255, 255);
  /* text-shadow: -0.1px 0.1px #5e5e5e; */
  font-weight: bolder;
}
.scrolldown_box_phone {
  /* border: 1px solid seagreen; */
  position: absolute;
  top: 85%;
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 10000;
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
