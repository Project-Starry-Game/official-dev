<template>
  <v-app class="home">
    <trailer />
    <v-container
      class="overflow-y-auto ma-0 pa-0 scroll_view"
      fluid
      id="scroll-target"
      style="height: 100vh"
    >
      <lobby id="goDowntoLobby" />
      <gameIntro />
      <itchPage />
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import trailer from "@/components/Home/trailer.vue";
import lobby from "@/components/Home/lobby.vue";
import gameIntro from "@/components/Home/gameIntro.vue";
import itchPage from "@/components/Home/itchPage.vue";
</script>

<script lang="ts">
export default {
  methods: {
    reportWindowSize() {
      location.reload();
    },
  },
  mounted() {
    window.onresize = this.reportWindowSize;
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  overflow-y: hidden;
  height: 100%;
  scroll-behavior: smooth;
}

.home {
  height: auto;
  overflow: hidden;
}

@keyframes smoothscroll1 {
  from,
  to {
    scroll-behavior: smooth;
  }
}

@keyframes smoothscroll2 {
  from,
  to {
    scroll-behavior: smooth;
  }
}

html {
  animation: smoothscroll1 0.01s;
}

html:focus-within {
  animation-name: smoothscroll2;
  scroll-behavior: smooth;
}
</style>
