<template>
  <div class="itch_phone">
    <!-- <v-card-title class="text-white"> DEMO </v-card-title> -->
    <navDrawer class="hidden-sm-and-up" @on-change="onEmit" :nav="nav" />
    <v-btn
      size="small"
      color="transparent"
      elevation="0"
      class="itch_btn_phone ma-0 pa-0"
      v-for="(item, index) in items"
      :key="index"
      :href="item.src"
    >
      <v-img width="8vw" class="pa-2" :src="item.img"> </v-img>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import patreonImg from "../../../assets/Digital-Patreon-Logo_White.png";
import itchImg from "../../../../assets/itch-io.svg"; //../../../assets/itch.svg";
import appIcon from "../../../assets/icon.png";
import navDrawer from "@/components/HomePage/itchPage/phone/navDrawer.vue";
</script>

<script lang="ts">
export default {
  name: "Home",
  mounted() {},
  methods: {},
  data() {
    return {
      items: [
        {
          img: itchImg,
          name: "GET IT ON ITCH",
          src: "https://project-starry.itch.io/soul-of-butterflies-incubation",
        },
        // {
        //   img: patreonImg,
        //   name: "BECOME A PATRON",
        //   src: "https://www.patreon.com/bePatron?u=56283261",
        // },
      ],
    };
  },
};
</script>

<style>
.itch_phone {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 10vw;
  height: 12vh;
  top: 40%;
  left: 87%;
  z-index: 100;
  /* border: 2px solid seashell; */
  /* background-color: antiquewhite; */
}
</style>
