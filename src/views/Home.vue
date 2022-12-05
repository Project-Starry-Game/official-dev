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
    reportWindowSize() {
      location.reload();
    },
    onPageChanged() {
      fading("fadingLong", 1000, () => {
        this.$router.push({ name: "Incubation" });
      });
    },
  },
  mounted() {
    window.onresize = this.reportWindowSize;
  },
};
</script>

<style>
.home {
  height: auto;
  width: auto;
}
.scroll_view {
  position: relative;
}
</style>
