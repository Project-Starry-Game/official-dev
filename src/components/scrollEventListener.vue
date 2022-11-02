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
        class=" pa-0 ma-0"
    >
    <!-- class="overflow-y-auto" -->
      <!-- <v-row
        v-scroll:#scroll-target="onScroll"
        align="center"
        justify="center"
        style="height: 1000px" 
      >
      </v-row> -->
    <v-container class="trailer_container  pa-0 ma-0" v-scroll:#scroll-target="onScroll">
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
            <v-img class="background" id="background" ref="background" src="@/assets/building.png" />
            <v-img class="foreground" ref="foreground" src="@/assets/character.png" />
        </div>
    </v-container>
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

        const maxBackgroundSize = 150;
        const backgroundSize = this.offsetTop / (maxBackgroundSize - 100);
        document.getElementById("background").style.transform = 
            'scale(' + (100 + backgroundSize * 0.4) / 100 + ')'
        },
    },
    
  }
</script>

<style>

.trailer_container {
  /* background: #2e231b; */
  overflow: scroll;
  /* overflow-x: hidden; */
  max-height: 90vh;
}
/* .trailer_container::-webkit-scrollbar {
  display: none;
} */
</style>