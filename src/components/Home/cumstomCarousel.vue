<template>
  <div class="carousel_block">
    <v-carousel
      cycle
      hide-delimiter-background
      show-arrows-on-hover
      height="100%"
      :show-arrows="false"
      class="c_carousel"
    >
      <template v-slot:prev="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on" color="transparent" elevation="0">
          <v-icon>mdi-arrow-left-thick </v-icon>
        </v-btn>
      </template>
      <template v-slot:next="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on" color="transparent" elevation="0">
          <v-icon>mdi-arrow-right-thick </v-icon>
        </v-btn>
      </template>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="slide.color" height="100vh">
          <v-row class="fill-height" align="center" justify="center">
            <v-img
              cover
              max-width="800"
              class="carousel_img"
              :src="slide.src"
              sizes="50"
            />
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["slides"],
  mounted() {},
  methods: {},
};
</script>

<style>
.carousel_block {
  height: 100vh;
}
.c_carousel {
  position: relative;
  top: -10%;
}
</style>
