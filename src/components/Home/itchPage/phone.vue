<template>
  <v-container fluid no-gutter class="itchPagePhone">
    <v-row justify="center" align="center">
      <div
        class="d-flex d-flex flex-column justify-center"
        data-aos="zoom-in-up"
        data-aos-offset="100px"
        style="position: relative; top: 10px"
      >
        <div class="divBlock_yellow_phone">
          <h3 class="text-white pa-2">DEMO</h3>
        </div>
        <v-img :src="appIcon" width="250"> </v-img>

        <v-btn
          color="#EB5254"
          href="https://project-starry.itch.io/soul-of-butterflies-incubation"
          elevation="0"
          width="250"
          class="itch_btn_phone"
        >
          <v-img width="20%" class="pa-2" :src="itchImg"> </v-img>
          <span class="text-white pa-2"> Get it on itch </span>
        </v-btn>
        <v-btn
          color="#EB5254"
          href="https://www.patreon.com/bePatron?u=56283261"
          elevation="0"
          width="250"
          class="itch_btn_phone"
        >
          <v-img width="10%" class="pa-2" :src="patreonImg"> </v-img>
          <span class="text-white pa-2"> Become a Patron! </span>
        </v-btn>
      </div>
    </v-row>
  </v-container>
</template>

<script setup>
import patreonImg from "@/assets/Digital-Patreon-Logo_White.png";
import itchImg from "@/assets/itch.svg";
import appIcon from "@/assets/icon.png";
</script>

<script>
export default {
  name: "Home",
  mounted() {},
  methods: {},
};
</script>

<style>
.itchPagePhone {
  /* background-color: #4c80bb; */
}
.divBlock_yellow_phone {
  background-color: #f49d1a;
  width: 250px;
  position: relative;
  top: -10px;
  z-index: 1;
}
.itch_btn_phone {
  margin-top: 10px;
}
</style>
