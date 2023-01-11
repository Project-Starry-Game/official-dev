<template>
  <v-container> <timeline :items="items" /> </v-container>
</template>

<script setup lang="ts">
import timeline from "@/components/About/timelinetest.vue";

import memberImg from "../assets/Icon.png";
import Eyeball from "../assets/Eyeball.png";

</script>

<script lang="ts">
export default {
  data() {
    return {
      items: [
        {
          title: "timeline.event1.title",
          subtitle: "timeline.event1.subtitle",
          content: "timeline.event1.content",
          src: memberImg,
        },
        {
          title: "timeline.event2.title",
          content: "timeline.event2.content",
          src: Eyeball,
        },
        {
          title: "timeline.event1.title",
          content: "timeline.event1.content",
          src: memberImg,
        },
        {
          title: "timeline.event3.title",
          content: "timeline.event3.content",
          src: Eyeball,
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
