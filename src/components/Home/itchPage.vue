<template>
  <section class="itchPage">
    <desktop class="hidden-xs" />
    <phone class="hidden-sm-and-up" />
  </section>
</template>

<script setup>
import patreonImg from "@/assets/Digital-Patreon-Logo_Black.png";
</script>

<script>
import desktop from "./itchPage/desktop.vue";
import phone from "./itchPage/phone.vue";
export default {
  name: "Home",
  mounted() {},
  methods: {},
  components: {
    desktop,
    phone,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}


.itchPage {
  display: flex;
  justify-content: space-evenly;
padding: 80px;
  /* height:800px; */
}</style>
