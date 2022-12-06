<template>
  <router-view></router-view>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  methods: {},
  mounted() {
    this.$vuetify.theme.dark = true;
    console.log(this.$vuetify.theme.dark);
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a::before {
  background-color: transparent;
}
@media only screen and (max-width: 500px) {
  h1 {
    font-size: 5.9vw;
  }
  h2 {
    font-size: 3vh;
  }
  p {
    font-size: 3.5vmin;
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
