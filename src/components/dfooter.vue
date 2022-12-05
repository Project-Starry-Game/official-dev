<template>
  <v-footer id="dfooter" color="black" class="text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon.icon"
        :href="icon.src"
        variant="text"
      ></v-btn>
    </div>
    <div>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Project Starry</strong>
      </v-col>
    </div>

    <!-- <span> PROJECT STARRY </span> -->
  </v-footer>
</template>

<script setup lang="ts">
import starryLogo from "../../../assets/Starry Logo.png";

import { fading } from "@/apis/sceneTransit.ts";
</script>

<script lang="ts">
export default {
  props: ["nav"],
  data() {
    return {
      overlay: false,
      icons: [
        {
          icon: "mdi-facebook",
          src: "https://www.facebook.com/projectstarrygame",
        },
        { icon: "mdi-twitter", src: "https://twitter.com/projectstarrygm" },
        { icon: "mdi-instagram", src: "https://www.instagram.com/starrycom/" },
        { icon: "mdi-patreon", src: "https://www.patreon.com/projectstarry" },
      ],
    };
  },
  methods: {},
  mouted() {},
};
</script>

<style></style>
