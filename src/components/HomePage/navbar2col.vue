<template>
  <div class="navbar">
    <desktop class="hidden-xs" @on-change="onEmit" :nav="nav" :imgs="imgs" />
  </div>
</template>

<script setup lang="ts">
import desktop from "@/components/HomePage/navbar/desktop.vue";
</script>

<script lang="ts">
export default {
  props: ["nav", "imgs"],
  data() {
    return {};
  },
  methods: {
    onEmit(ele) {
      this.$emit("on-change", ele);
    },
  },
  mouted() {},
};
</script>

<style></style>
