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
      <homenavbar @on-change="onPageChanged" /><lobby id="goDowntoLobby" />
      <homebg />
      <gameIntro id="gameIntro_pos" />
      <itchPage />
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
  data() {
    return {
      ableToTransisit: true,
    };
  },
  methods: {
    reportWindowSize() {
      location.reload();
    },
    onPageChanged(ele: any) {
      let body = document.body;
      if (ele != null) {
        let id = ele.id;
        let fade = ele.fade;
        switch (id) {
          case "trailer_pos":
            break;
        }
        if (fade == true) {
          if (this.ableToTransisit == false) return;
          this.ableToTransisit = false;
          body.classList.add("fading");
          setTimeout(() => {
            body.classList.remove("fading");
            this.ableToTransisit = true;
          }, 2000);

          let offset = document.getElementById(id).getBoundingClientRect();
          $("html, body").animate(
            {
              scrollTop: offset.top,
            },
            500
          );
        } else {
          if (this.ableToTransisit == false) return;
          this.ableToTransisit = false;

          body.classList.add("fadingShort");
          setTimeout(() => {
            body.classList.remove("fadingShort");
            this.ableToTransisit = true;
          }, 500);

          let offset = document.getElementById(id).getBoundingClientRect();
          document.getElementById("scroll-target-page").scrollTop = offset.top;
        }
      } else {
        if (this.ableToTransisit == false) return;
        this.ableToTransisit = false;
        body.classList.add("fadingLong");
        setTimeout(() => {
          body.classList.remove("fadingLong");
          this.ableToTransisit = true;
        }, 5000);
      }
    },
  },
  mounted() {
    window.onresize = this.reportWindowSize;
    this.onPageChanged();
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
  scroll-behavior: auto;
}

.home {
  height: auto;
  width: auto;
}

.fadingLong {
  -moz-animation: fadeInAnimation ease 5s; /* Firefox */
  -webkit-animation: fadeInAnimation ease 5s; /* Safari and Chrome */
  -o-animation: fadeInAnimation ease 5s; /* Opera */
  animation: fadeInAnimation ease 5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: running;
}

.fading {
  -moz-animation: fadeInAnimation ease 2s; /* Firefox */
  -webkit-animation: fadeInAnimation ease 2s; /* Safari and Chrome */
  -o-animation: fadeInAnimation ease 2s; /* Opera */
  animation: fadeInAnimation ease 2s;
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
