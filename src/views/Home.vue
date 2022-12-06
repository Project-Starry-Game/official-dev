<template>
  <v-app class="home">
    <div id="trailer_pos">
      <trailer @on-change="onPageChanged" />
    </div>
  </v-app>
</template>

<script setup lang="ts">
import trailer from "@/components/Home/trailer.vue";
import { fading } from "@/apis/sceneTransit.ts";
</script>

<script lang="ts">
export default {
  data() {
    return {};
  },
  methods: {
    onPageChanged() {
      fading("fadingLong", 1000, () => {
        this.$router.push({ name: "Incubation" });
      });
    },
  },
  mounted() {},
};
</script>

<style>
.home {
  height: 100vh;
  width: 100vw;
}
.scroll_view {
  position: relative;
}
</style>
