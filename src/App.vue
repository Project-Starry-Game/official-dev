<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script setup lang="ts">
// import HelloWorld from "@/components/HelloWorld.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  overflow-y: hidden;
  overflow-x: hidden;
  height: 100%;
  width: 100vw;
  scroll-behavior: auto;
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
