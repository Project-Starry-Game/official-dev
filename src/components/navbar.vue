<template>
  <v-card class="bar" elevation="0">
    <v-toolbar
      color="transparent"
      dense
      flat
      tile
      class="pa-0 ma-0"
      elevation="0"
    >
      <!-- <v-icon large color="green darken-2"> mdi-domain </v-icon> -->
      <img
        class="bar_logo"
        ref="logo"
        :src="require('@/assets/LOGO_ONLY_BLACK.png')"
        height="50"
      />
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <!-- <v-img
        align-self-start
        height="40px"
        class="bar_logo"
        ref="logo"
        :src="require('@/assets/LOGO_ONLY_BLACK.png')"
      /> -->
      <v-toolbar-title> </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn>About</v-btn>

      <v-btn>Contact</v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "Home",
  props: ["subs"],
};
</script>

<style>
.bar {
  background: lightblue;
  position: sticky;
  top: 0;
  border-radius: 0;
  z-index: 10000;
}
.bar_logo {
  display: flex;
  text-align: left;
  position: relative;
  left: 1vw;
}
</style>
