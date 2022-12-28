<template>
  <v-container> <timeline :items="items" /> </v-container>
</template>

<script setup lang="ts">
import timeline from "@/components/About/timeline.vue";

import memberImg from "../assets/Icon.png";
</script>

<script lang="ts">
export default {
  data() {
    return {
      items: [
        {
          title: "timeline.event1.title",
          content: "timeline.event1.content",
          src: memberImg,
        },
        {
          title: "timeline.event1.title",
          content: "timeline.event1.content",
          src: memberImg,
        },
        {
          title: "timeline.event1.title",
          content: "timeline.event1.content",
          src: memberImg,
        },
        {
          title: "timeline.event1.title",
          content: "timeline.event1.content",
          src: memberImg,
        },
      ],
    };
  },
};
</script>
