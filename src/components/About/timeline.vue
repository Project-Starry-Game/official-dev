<template>
  <v-container>
    <v-timeline>
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        width="50%"
        height="50%"
      >
        <v-card-title> {{ $t(item.title) }} </v-card-title>
        <v-card-text> {{ $t(item.content) }} </v-card-text>
        <v-img width="100%" height="100%" :src="item.src"></v-img>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  props: ["items"],
  data() {
    return {};
  },
};
</script>
