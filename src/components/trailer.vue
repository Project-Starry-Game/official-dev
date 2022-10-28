<template>
  <v-container
    class="ma-0 pa-0 trailer_container"
    fluid

  >
    <!-- style="overflow: scroll; max-height: 95vh" -->

    <div class="img_container"  >
      <v-img class="foreground" ref="foreground" src="@/assets/character.png" />
      <v-img class="background" ref="background" src="@/assets/building.png" />
    </div>


     <div class="section section-1" ref="first">
      <h1>STARRY</h1>
    </div>

    <div class="section section-2" ref="second" style="margin-bottom: -70px">
      <div class="section2_container">
        <p>Swallow the Black liquid, tell me what you see.</p>
        <p>
          A beautiful world with silence? A broken coffin ?Or even just that
          empty bottle in your hand.
        </p>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style>
.trailer_container {
  background: #2e231b;
  overflow: scroll;
  /* overflow-x: hidden; */
  max-height: 90vh;
}
.trailer_container::-webkit-scrollbar {
  display: none;
}

.background {
  position: sticky;
  margin-top:-160px;
}
.foreground {
    position: sticky;
    top:100%;
    left: 45%;
    width: 10%;
    z-index: 100;
}
.section {
    
    color: #f2ca95;
    display: flex;
    justify-content: center;
    
}
.section2_container {
  display: flex;
  flex-direction: column;
  align-items: center;

}
</style>
