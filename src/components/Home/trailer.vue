<template>
  <div>
    <div class="hidden-xs">
      <other class="hidden-xs-only" @on-change="scrollToNextSection" />
    </div>
    <div class="hidden-sm-and-up">
      <xs @on-change="scrollToNextSection" />
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
