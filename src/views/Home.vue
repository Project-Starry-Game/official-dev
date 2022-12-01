<template>
  <v-app class="home">
    <div id="trailer_pos">
      <trailer @on-change="onPageChanged" />
    </div>
    <v-container
      class="overflow-y-auto overflow-x-hidden ma-0 pa-0 scroll_view"
      fluid
      id="scroll-target-page"
      style="height: 100vh; position: relative"
      :value="scrollTar"
    >
      <lobby id="goDowntoLobby" />
      <gameIntro id="gameIntro_pos" />
      <!-- <itchPage /> -->
      <homenavbar @on-change="onPageChanged" />
      <!-- <homebg /> -->
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import trailer from "@/components/Home/trailer.vue";
import lobby from "@/components/Home/lobby.vue";
import gameIntro from "@/components/Home/gameIntro.vue";
import itchPage from "@/components/Home/itchPage.vue";
import homenavbar from "@/components/Home/navbar2col.vue";
import homebg from "@/components/Home/homeBG.vue";

import bk from "@/assets/background.png";

import $ from "jquery";
</script>

<script lang="ts">
export default {
  methods: {
    data() {
      return {
        scrollTar: null,
      };
    },
    reportWindowSize() {
      location.reload();
    },
    onPageChanged(ele: any) {
      let body = document.body;
      if (ele != null) {
        let id = ele.id;
        let fade = ele.fade;
        if (fade == true) {
          body.classList.add("fading");
          setTimeout(() => {
            body.classList.remove("fading");
          }, 1500);

          document.getElementById(ele.id)!.scrollIntoView();
        } else {
          body.classList.add("fadingShort");
          setTimeout(() => {
            body.classList.remove("fadingShort");
          }, 500);

          console.log(123);

          let offset = document.getElementById(id).getBoundingClientRect();
          document.getElementById("scroll-target-page").scrollTop = offset.top;
        }
      }
    },
  },
  mounted() {
    window.onresize = this.reportWindowSize;
    this.onPageChanged(null);
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  overflow-y: hidden;
  overflow-x: hidden;
  height: 100%;
  width: 100vw;
  scroll-behavior: smooth;
}

.home {
  height: auto;
  width: auto;
}

@keyframes smoothscroll1 {
  from,
  to {
    scroll-behavior: smooth;
  }
}

@keyframes smoothscroll2 {
  from,
  to {
    scroll-behavior: smooth;
  }
}

html {
  animation: smoothscroll1 0.01s;
}

html:focus-within {
  animation-name: smoothscroll2;
  scroll-behavior: smooth;
}

.fading {
  -moz-animation: fadeInAnimation ease 1.5s; /* Firefox */
  -webkit-animation: fadeInAnimation ease 1.5s; /* Safari and Chrome */
  -o-animation: fadeInAnimation ease 1.5s; /* Opera */
  animation: fadeInAnimation ease 1.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: running;
}

.fadingShort {
  -moz-animation: fadeInAnimation ease 0.5s; /* Firefox */
  -webkit-animation: fadeInAnimation ease 0.5s; /* Safari and Chrome */
  -o-animation: fadeInAnimation ease 0.5s; /* Opera */
  animation: fadeInAnimation ease 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: running;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
