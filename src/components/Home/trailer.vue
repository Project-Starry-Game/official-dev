<template>
  <div style="position: relative">
    <div style="z-index: 5">
      <other class="hidden-xs" @on-change="scrollToNextSection" />
      <xs class="hidden-sm-and-up" @on-change="scrollToNextSection" />
    </div>
  </div>
</template>

<script setup lang="ts">
import xs from "@/components/Home/trailer/phone.vue";
import other from "@/components/Home/trailer/desktop.vue";
</script>

<script lang="ts">
export default {
  setup() {},

  mounted() {},

  data: () => ({
    offsetTop: 0,
  }),

  methods: {
    scrollToNextSection(ele) {
      this.$emit("on-change", ele);
    },
  },
};
</script>

<style></style>
