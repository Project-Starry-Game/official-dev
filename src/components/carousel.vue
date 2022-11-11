<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
    >
        <v-sheet
            :color="slide.color"
            height="70vh"
        >
        <v-row
            class="fill-height"
            align="center"
            justify="center"
        >
        <v-img :src="slide.src"/>
          <!-- <div class="text-h2">
            {{ slide }} Slide
          </div> -->
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    name: "Home",
    props: ["slides"],
    mounted() {
    // console.log(this.slides);

  },

}
</script>

<style>

</style>