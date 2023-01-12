<template>
  <v-container> <timeline :items="items" :imgs="imgs"/> </v-container>
</template>

<script setup lang="ts">
import timeline from "@/components/About/timeline.vue";

import memberImg from "../assets/Icon.png";
import Eyeball from "../assets/Eyeball.png";
import Reincarnate_Cover from "../assets/Reincarnate_Cover.png";

</script>

<script lang="ts">
export default {
  data() {
    return {
      imgs:
        {
          width: "80%" ,
          height: "20%",
        }
      ,
      items: [
        {
          id: 1,
          title: "timeline.event1.title",
          // subtitle: "timeline.event1.subtitle",
          content: "timeline.event1.content",
          src: memberImg,
        },
        {
          id: 2,
          title: "timeline.event2.title",
          content: "timeline.event2.content",
          src: Eyeball,
        },
        {
          id: 3,
          title: "timeline.event3.title",
          content: "timeline.event3.content",
          src: Reincarnate_Cover,
        },
        {
          id: 4,
          title: "timeline.event1.title",
          content: "timeline.event1.content",
          src: memberImg,
        },
        {
          id: 5,
          title: "timeline.event2.title",
          content: "timeline.event2.content",
          src: Eyeball,
        },
        {
          id: 6,
          title: "timeline.event3.title",
          content: "timeline.event3.content",
          src: Reincarnate_Cover,
        },

      ],
    };
  },
};
</script>
