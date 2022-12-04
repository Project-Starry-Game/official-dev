<template>
  <div class="navbar">
    <desktop class="hidden-xs" @on-change="onEmit" :nav="nav" :imgs="imgs" />
    <phone class="hidden-sm-and-up" @on-change="onEmit" :nav="nav" />
  </div>
</template>

<script setup lang="ts">
import desktop from "@/components/Home/navbar/desktop.vue";
import phone from "@/components/Home/navbar/phone.vue";
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
