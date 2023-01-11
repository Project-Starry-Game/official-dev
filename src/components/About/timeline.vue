<template>
  <v-container>
    <v-timeline>
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        width="50%"
        height="50%"
        
      >
        <div class="timeline_item">
          <div class="text_box">
            <v-card-title>{{ $t(item.title) }} </v-card-title>
            <v-card-text> {{ $t(item.content) }} </v-card-text>
          </div>
        
        <v-img width="100%" height="100%" :src="item.src"></v-img>

        </div>
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

<style>
  .timeline_item{
    display: flex;
    
  }
</style>
