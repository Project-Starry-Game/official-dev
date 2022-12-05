<template>
  <div class="itch_phone">
    <!-- <v-card-title class="text-white"> DEMO </v-card-title> -->
    <v-btn
      size="small"
      color="transparent"
      elevation="0"
      class="itch_btn_phone borderrr ma-0 pa-0"
      v-for="(item, index) in items"
      :key="index"
      :href="item.src"
    >
      <v-img width="20" class="pa-2" :src="item.img"> </v-img>
      <!-- <span class="ma-2 pa-2 text-white"> {{ item.name }} </span> -->
    </v-btn>
    <phone class="hidden-sm-and-up" @on-change="onEmit" :nav="nav" />
  </div>
</template>

<script setup lang="ts">
import patreonImg from "../../../assets/Digital-Patreon-Logo_White.png";
import itchImg from "../../../assets/itch-io.svg"; //../../../assets/itch.svg";
import appIcon from "../../../assets/icon.png";
import phone from "@/components/Home/navbar/phone.vue";
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
  position: sticky;
  /* border: 2px solid seashell; */
  flex-direction: column;
  align-items: center;
  width: 10vw;
  height: 20vh;
  top: 78%;
  left: 83%;
  z-index: 100;
}
</style>
