<template>
  <v-container>
    <v-row>
      <Parallax />
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from "vue";

// Components
import Parallax from "../components/Parallax.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Parallax,
  },
});
</script>
