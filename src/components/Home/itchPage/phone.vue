<template>
  <v-container fluid no-gutter>
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
        <iframe
          frameborder="0"
          src="https://itch.io/embed/1033029?border_width=5"
          width="216"
          height="175"
          style="margin: auto"
          ><a
            href="https://project-starry.itch.io/soul-of-butterflies-incubation"
            >Soul of Butterflies : Incubation by Project Starry</a
          ></iframe
        >
        <span class="pa-2 text-grey">
          If you like this game, you could also
        </span>
        <v-btn
          color="#EB5254"
          href="https://www.patreon.com/bePatron?u=56283261"
          elevation="0"
        >
          <v-img width="10%" class="pa-2" :src="patreonImg"> </v-img>
          <span class="text-white pa-2"> Become a Patron! </span>
        </v-btn>
      </div>
    </v-row>
  </v-container>
</template>

<script setup>
import patreonImg from "@/assets/Digital-Patreon-Logo_Black.png";
</script>

<script>
export default {
  name: "Home",
  mounted() {},
  methods: {},
};
</script>

<style>
.itchPage {
  display: flex;
  justify-content: space-evenly;
  padding-top: 80px;
  height: 500px;
  overflow: hidden;
}
.divBlock_yellow_phone {
  background-color: #f49d1a;
  width: 150px;
  position: relative;
  top: 20px;
  left: -10px;
  z-index: 1;
}
</style>
