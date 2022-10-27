<template>
  <div>
    <v-row
      justify="center"
      align="center"
    >
      <v-subheader>Offset Top</v-subheader>
      {{ offsetTop }}
    </v-row>
    <v-container
      id="scroll-target"
      style="max-height: 400px"
      class="overflow-y-auto"
    >
      <v-row
        v-scroll:#scroll-target="onScroll"
        align="center"
        justify="center"
        style="height: 1000px"
      >
      </v-row>
          <div class="trailer_container">
    <div class="section section-1" ref="first">
        <h1>STARRY</h1>
    </div>

    <div class="section section-2" ref="second">
        <div class="section2_container">
            <p>Swallow the Black liquid, tell me what you see. </p>
            <p>A beautiful world with silence? A broken coffin ?Or even just that empty bottle in your hand.</p>
        </div>
    </div>    

    <div class="img_container">
        <v-img class="background" ref="background" src="@/assets/building.png" />
        <v-img class="foreground" ref="foreground" src="@/assets/character.png" />
    </div>
  </div>
    </v-container>
  </div>
</template>  

<script>
  export default {
    data: () => ({
      offsetTop: 0,
    }),

    methods: {
      onScroll (e) {
        this.offsetTop = e.target.scrollTop
      },
    },
  }
</script>

<style>

</style>