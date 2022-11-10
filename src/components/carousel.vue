<template>
  <div class="carousel_block">
    <v-carousel
      cycle
      hide-delimiter-background
      show-arrows-on-hover
      height="100%"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="slide.color" height="100vh">
          <v-row class="fill-height" align="center" justify="center">
            <v-card elevation="0">
              <v-img :src="slide.src" width="50%" />
            </v-card>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
    name: "Home",
    props: ["slides"],
    mounted() {
    // console.log(this.slides);

=======
  name: "Home",
  props: ["slides"],
  mounted() {
    console.log(this.slides);
>>>>>>> 0334cc2 (Setting game intro block)
  },
};
</script>

<style>
.carousel_block {
  height: 100vh;
}
</style>
