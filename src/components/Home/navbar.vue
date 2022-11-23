<template>
  <v-card class="bar" elevation="0">
    <v-toolbar
      dense
      flat
      tile
      class="bar pa-0 ma-0"
      elevation="0"
    >
      <img class="bar_logo" ref="logo" :src="logoUrl" height="50" />

      <v-toolbar-title> </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn>About</v-btn>

      <v-btn>Contact</v-btn>
    </v-toolbar>
  </v-card>
</template>

<script setup>
import logoUrl from "@/assets/LOGO_ONLY_BLACK.png";
</script>

<script>
export default {
  name: "Home",
  props: ["subs"],
  mounted() {},
  methods: {},
};
</script>

<style>
.bar {
  background: rgb(84, 213, 151);
  position: sticky;
  top: 0;
  border-radius: 0;
  z-index: 1000;
}
.bar_logo {
  display: flex;
  text-align: left;
  position: relative;
  left: 1vw;
}
</style>
