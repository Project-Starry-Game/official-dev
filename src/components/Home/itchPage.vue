<template>
  <div class="itchPage">
    <desktop class="hidden-xs" />
    <phone class="hidden-sm-and-up" />
  </div>
</template>

<script setup lang="ts">
import patreonImg from "../../assets/Digital-Patreon-Logo_Black.png";
import desktop from "./itchPage/desktop.vue";
import phone from "./itchPage/phone.vue";
</script>

<script lang="ts">
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
</style>
