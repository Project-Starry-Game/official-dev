<template>
  <div class="text-center narbar_phone">
    <v-btn
      @click="overlay = !overlay"
      elevation="0"
      width="31.44px"
      min-width="31.44px"
      height="31.44px"
      max-height="31.44px"
      color="white"
      class="pa-0 ma-0"
    >
      <v-img width="12.44px" class="pa-2" :src="menubar"> </v-img>
    </v-btn>
    <v-overlay class="my-overlay" v-model="overlay" id="menu_card">
      <v-card
        id="overlay_card"
        width="100vw"
        height="100vh"
        class="overlay_card"
        color="black"
      >
        <v-container fluid id="menu_card">
          <v-row justify="center" align="center">
            <v-col cols="12">
              <v-btn
                elevation="0"
                color="transparent"
                size="large"
                icon="mdi-close"
                @click="overlay = !overlay"
              >
              </v-btn>
            </v-col>
          </v-row>
          <v-list-item-group>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              @click="menuActionClick(item)"
              class="text-center"
              style="height: 100px"
            >
              <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
          <v-divider />
          <v-container
            color="black"
            app
            class="pa-2 ma-2 text-center d-flex flex-column"
            style="position: relative; top: 40px"
          >
            <div style="position: relative; top: -20px">
              <v-btn
                @click="changeLocales('zh-TW')"
                class="ma-0"
                variant="text"
                color="white"
                size="small"
              >
                繁
              </v-btn>
              <v-btn
                @click="changeLocales('en')"
                class="ma-0"
                variant="text"
                color="white"
                size="small"
              >
                EN
              </v-btn>
              <v-btn
                @click="changeLocales('ja')"
                class="ma-0"
                variant="text"
                color="white"
                size="small"
              >
                日
              </v-btn>
            </div>
            <div>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                :icon="icon.icon"
                :href="icon.src"
                variant="text"
              ></v-btn>
            </div>
            <div>
              <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong>Project Starry</strong>
              </v-col>
            </div>

            <!-- <span> PROJECT STARRY </span> -->
          </v-container>
        </v-container>
      </v-card>
    </v-overlay>
  </div>
</template>

<script setup lang="ts">
import starryLogo from "../../../../assets/Starry Logo.png";
import menubar from "../../../../assets/bars-solid.svg";
import { fading } from "@/apis/sceneTransit.ts";
</script>

<script lang="ts">
export default {
  props: ["nav"],
  data() {
    return {
      overlay: false,
      icons: [
        {
          icon: "mdi-facebook",
          src: "https://www.facebook.com/projectstarrygame",
        },
        { icon: "mdi-twitter", src: "https://twitter.com/projectstarrygm" },
        { icon: "mdi-instagram", src: "https://www.instagram.com/starrycom/" },
        { icon: "mdi-patreon", src: "https://www.patreon.com/projectstarry" },
      ],
      items: [
        { title: "menu1", name: "Trailer", id: "trailer_pos" },
        { title: "menu2", name: "Lobby", id: "goDowntoLobby" },
        { title: "menu3", name: "Intro", id: "gameIntro_pos" },
      ],
    };
  },
  methods: {
    menuActionClick(ele) {
      // this.$emit("on-change", action);
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

        this.overlay = false;
      }
    },
    changeLocales(lan) {
      this.$i18n.locale = lan;
    },
  },
  mouted() {
    var h = window.innerHeight;
    document.getElementById("overlay_card").style.minHeight = h + "px";
  },
};
</script>

<style>
.overlay_card {
  min-height: 100vh;
}
</style>
