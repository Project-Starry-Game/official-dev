<template>
  <v-app class="home">
    <trailer />
    <lobby id="goDowntoLobby" />
  </v-app>
</template>

<script setup lang="ts">
import trailer from "@/components/Home/trailer.vue";
import lobby from "@/components/Home/lobby.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

.body {
  position: relative;
}

.home {
}
</style>
