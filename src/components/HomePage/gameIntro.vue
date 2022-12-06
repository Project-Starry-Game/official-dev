<template>
  <div class="gameIntro">
    <desktop class="hidden-xs" :platforms="platforms" :genres="genres" />
    <phone class="hidden-sm-and-up" :platforms="platforms" :genres="genres" />
  </div>
</template>

<script setup lang="ts">
import desktop from "./gameIntro/desktop.vue";
import phone from "./gameIntro/phone.vue";
</script>

<script lang="ts">
export default {
  data() {
    return {
      platforms: [{ name: "Steam" }, { name: "iOS" }, { name: "Android" }],
      genres: ["generes.g1", "generes.g2"],
    };
  },
  mounted() {},
};
</script>
