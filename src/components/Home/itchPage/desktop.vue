<template>
  <div class="itch_desktop">
    <div class="d-flex flex-column justify-center">
      <iframe
        frameborder="0"
        src="https://itch.io/embed/1033029?linkback=true&amp;bg_color=222222&amp;fg_color=eeeeee&amp;link_color=ffb119&amp;border_color=ffffff"
        width="552"
        height="167"
        ><a href="https://project-starry.itch.io/soul-of-butterflies-incubation"
          >Soul of Butterflies : Incubation by Project Starry</a
        ></iframe
      >
      <div class="d-flex justify-end" style="position: relative; top: 10px">
        <span class="pa-2 text-white" style="font-size: 10px">
          If you like this game, you could also
        </span>
        <v-spacer />
        <v-btn
          color="#EB5254"
          href="https://www.patreon.com/bePatron?u=56283261"
          elevation="0"
        >
          <v-img width="10%" class="pa-2" :src="patreonImg"> </v-img>
          <span class="text-white pa-2"> Become a Patron! </span>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import patreonImg from "../../../assets/Digital-Patreon-Logo_White.png";
</script>

<script>
export default {
  name: "Home",
  mounted() {},
  methods: {},
};
</script>

<style>
.itch_desktop {
  position: relative;
  top: -5vh;
  display: flex;
  justify-content: space-evenly;
  padding: 80px;
}
.divBlock_yellow {
  width: 150px;
  position: relative;
  left: -20px;
  top: 20px;
  z-index: 1;
}
</style>
