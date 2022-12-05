<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  methods: {
    calculateVh() {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", vh + "px");
    },
  },
  mounted() {
    // Initial calculation
    this.calculateVh();
    // Re-calculate on resize
    window.addEventListener("resize", this.calculateVh);
    // Re-calculate on device orientation change
    window.addEventListener("orientationchange", this.calculateVh);
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

:root {
  --app-height: 100%;
}

html,
body {
  overflow-y: hidden;
  overflow-x: hidden;
  position: fixed;
  scroll-behavior: auto;
  @media not all and (hover: hover) {
    height: var(--app-height);
  }
}

html {
  height: fill-available;
  height: -webkit-fill-available;
}

body {
  min-height: 100vh;
  min-height: fill-available;
  min-height: -webkit-fill-available;
}

@media only screen and (max-width: 500px) {
  h1 {
    font-size: 5.9vw;
  }
  h2 {
    font-size: 3vh;
  }

  p {
    font-size: 2.5vmin;
  }
}

.fadingLong {
  -moz-animation: fadeInAnimation ease 5s; /* Firefox */
  -webkit-animation: fadeInAnimation ease 5s; /* Safari and Chrome */
  -o-animation: fadeInAnimation ease 5s; /* Opera */
  animation: fadeInAnimation ease 5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: running;
}

.fading {
  -moz-animation: fadeInAnimation ease 2s; /* Firefox */
  -webkit-animation: fadeInAnimation ease 2s; /* Safari and Chrome */
  -o-animation: fadeInAnimation ease 2s; /* Opera */
  animation: fadeInAnimation ease 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: running;
}

.fadingShort {
  -moz-animation: fadeInAnimation ease 0.5s; /* Firefox */
  -webkit-animation: fadeInAnimation ease 0.5s; /* Safari and Chrome */
  -o-animation: fadeInAnimation ease 0.5s; /* Opera */
  animation: fadeInAnimation ease 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: running;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
