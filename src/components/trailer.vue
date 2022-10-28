<template>
  <v-container
    class="ma-0 pa-0 trailer_container"
    fluid
  >
    <!-- style="overflow: scroll; max-height: 95vh" -->
    <div class="section section-1" ref="first">
        <v-img class="logo" ref="logo" src="@/assets/logo_shadow.png" />
    </div>

    <div class="img_container"  >
      <v-img class="foreground" ref="foreground" src="@/assets/character.png" />
      <v-img class="background" ref="background" src="@/assets/building.png" />
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
  /* background: #2e231b; */
  overflow: scroll;
  /* overflow-x: hidden; */
  max-height: 90vh;
}
/* .trailer_container::-webkit-scrollbar {
  display: none;
} */

.background {
    position: sticky;
    margin-top: -100%;
    top: 0%;
}
.foreground {
    position: sticky;
    top: 100%;
    z-index: 100;
}
.section {
    background-image: linear-gradient(to bottom, #1E140D 70%, #9C8C83 250%);
    height: 90vh;
    opacity: 0.9;
    /* margin-top: -50%; */
    position:sticky;
    color: #f2ca95;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 200;
}
.logo{
    height: 50vh;
}
.section2_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
