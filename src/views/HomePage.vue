<template>
  <v-app>
    <v-container class="ma-0 pa-0 scroll_view" fluid style="position: relative">
      <div>
        <homebg />
      </div>

      <div>
        <lobby id="goDowntoLobby" />
      </div>

      <div>
        <gameIntro id="gameIntro_pos" />
      </div>

      <div>
        <itchPage />
      </div>

      <div class="hidden-xs" style="position: sticky">
        <!-- <homenavbar @on-change="onPageChanged" :nav="nav" /> -->
      </div>

      <div class="hidden-xs">
        <toolNavbar />
      </div>
    </v-container>

    <div>
      <footerBar />
    </div>
  </v-app>
</template>

<script setup lang="ts">
import homebg from "@/components/HomePage/homeBG.vue";
import lobby from "@/components/HomePage/lobby.vue";
import gameIntro from "@/components/HomePage/gameIntro.vue";
import toolNavbar from "@/components/toolNavbar.vue";
import itchPage from "@/components/HomePage/itchPage.vue";
import homenavbar from "@/components/HomePage/navbar2col.vue";
import footerBar from "@/components/dfooter.vue";

import bk from "@/assets/background.png";
import barLogoImage from "../assets/Icon.png";
import eye from "../assets/Reincarnate_White.png";
import eyeball from "../assets/Eyeball.png";

import { fading } from "@/apis/sceneTransit.ts";
</script>

<script lang="ts">
export default {
  data() {
    return {
      ableToTransisit: true,
      nav: [
        { name: "Trailer", id: "trailer_pos", isActive: false },
        { name: "Lobby", id: "goDowntoLobby", isActive: false },
        { name: "Intro", id: "gameIntro_pos", isActive: false },
      ],
      elements: [],
      scrollTop: null,
      eyeballImage: null,
      eyeImage: null,
      trailerImage: null,
      offsetTop: 0,
    };
  },
  methods: {
    onPageChanged(ele: any) {
      let name = ele.name;
      if (name == "Trailer") {
        fading("fadingLong", 1000, () => {
          this.$router.push({ name: "Home" });
        });
      } else {
        fading("fadingShort", 200, () => {
          let id = ele.id;
          let offset = document.getElementById(id).getBoundingClientRect();
          document.getElementById("scroll-target-page").scrollTop =
            offset.top + 10;
        });
      }
    },
    onScroll(e) {
      // this.offsetTop = e.target.scrollTop;
    },
  },
  mounted() {
    // window.onresize = this.reportWindowSize;
  },
  computed: {},
};
</script>
