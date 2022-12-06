<template>
  <v-app class="home">
    <v-container class="ma-0 pa-0 scroll_view" fluid style="position: relative">
      <lobby id="goDowntoLobby" />
      <homebg />
      <gameIntro id="gameIntro_pos" />
      <itchPage />
      <div style="position: sticky">
        <homenavbar @on-change="onPageChanged" :nav="nav" :imgs="getImg" />
      </div>
      <toolNavbar class="hidden-xs" />
    </v-container>
    <footerBar />
  </v-app>
</template>

<script setup lang="ts">
import toolNavbar from "@/components/toolNavbar.vue";
import lobby from "@/components/HomePage/lobby.vue";
import gameIntro from "@/components/HomePage/gameIntro.vue";
import itchPage from "@/components/HomePage/itchPage.vue";
import homenavbar from "@/components/HomePage/navbar2col.vue";
import homebg from "@/components/HomePage/homeBG.vue";
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
    reportWindowSize() {
      location.reload();
    },
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
      this.offsetTop = e.target.scrollTop;
    },
  },
  mounted() {
    window.onresize = this.reportWindowSize;

    this.nav.map((obj) => {
      let id = obj.id;
      this.elements.push(document.getElementById(id));
    });

    this.scrollTop = document.getElementById("scroll-target-page");
    this.eyeballImage = eyeball;
    this.eyeImage = eye;
    this.trailerImage = eye;
  },
  computed: {
    getImg() {
      let _imgs = [];
      let currentPage = 0;
      let index = 0;

      this.elements.map((obj) => {
        if (index > 0) {
          let offset = obj.getBoundingClientRect().top;
          if (offset <= 50) currentPage = index;
          let n = this.offsetTop;
        }
        index++;
      });

      index = 0;
      this.elements.map((obj) => {
        if (index == 0) _imgs.push(this.trailerImage);
        if (index > 0) {
          _imgs.push(index == currentPage ? this.eyeballImage : this.eyeImage);
          this.nav[index].isActive = index == currentPage ? true : false;
        }
        index++;
      });

      _imgs.push(eye);
      return _imgs;
    },
  },
};
</script>
