<template>
  <v-card class="mx-auto" max-width="450" elevation="0">
    <v-card-title> DEMO </v-card-title>

    <v-card-subtitle> View it on itch.io </v-card-subtitle>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        size="small"
        color="#EB5254"
        href="https://project-starry.itch.io/soul-of-butterflies-incubation"
        elevation="0"
        class="itch_btn_phone borderrr ma-3"
      >
        <v-img width="20%" class="pa-2" :src="itchImg"> </v-img>
        <span class="pa-1"> Get it on itch </span>
      </v-btn>
      <v-btn
        size="small"
        color="#EB5254"
        href="https://www.patreon.com/bePatron?u=56283261"
        elevation="0"
        class="borderrr ma-4"
      >
        <!-- <v-img width="10%" class="pa-2" :src="patreonImg"> </v-img> -->
        <span class="pa-2" style="font-size: 1px"> Become a Patron! </span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import patreonImg from "../../../assets/Digital-Patreon-Logo_White.png";
import itchImg from "../../../assets/itch.svg"; //../../../assets/itch.svg";
import appIcon from "../../../assets/icon.png";
</script>

<script lang="ts">
export default {
  name: "Home",
  mounted() {},
  methods: {},
};
</script>

<style>
/* .divBlock_yellow_phone {
  background-color: #f49d1a;
  width: 250px;
  position: relative;
  top: -10px;
  z-index: 1;
}
.itch_btn_phone {
  margin-top: 10px;
} */

/* .borderrr{
  border: 3px solid #f49d1a;
} */
</style>
