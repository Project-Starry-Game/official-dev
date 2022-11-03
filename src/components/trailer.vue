<template>
  <v-container
    class="ma-0 pa-0 trailer_container overflow-y-auto"
    fluid
    id="scroll-target"
  >
    <!-- style="overflow: scroll; max-height: 95vh" -->
    <div class="section section-1" id="first" ref="first">
      <v-img class="logo" ref="logo" src="@/assets/logo_shadow.png" />
    </div>

    <div class="img_container" v-scroll:#scroll-target="onScroll">
      <v-img
        class="foreground"
        id="foreground"
        ref="foreground"
        src="@/assets/character.png"
      />
      <v-img
        class="background"
        id="background"
        ref="background"
        src="@/assets/building.png"
      />
    </div>

    <div class="section section-2" ref="second" >
      <!-- style="margin-bottom: -70px" -->
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
  data: () => ({
    offsetTop: 0,
  }),
  components: {},
  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
      
      var trailer_container = document.getElementById("scroll-target");
      const maxScrollTop = trailer_container.scrollHeight - window.innerHeight;
      // const maxBackgroundSize = 150;
      // const backgroundSize = this.offsetTop / (maxBackgroundSize - 100);
      var bk = document.getElementById("background");
      
      // bk.style.transform = "scale(" + (100 + backgroundSize * 5) / 100 + ")";
      bk.style.transform = "scale(" + (1 + Math.pow((this.offsetTop / maxScrollTop ), 2))  + ")";
      console.log(this.offsetTop);
      console.log(trailer_container.scrollHeight);

      first.style.opacity =
      (100 - (this.offsetTop + window.innerHeight - first.offsetHeight)) / 100
    },
  },
};
</script>

<style>
.trailer_container {
  /* background: #2e231b; */
  /* overflow: scroll; */
  overflow-x: hidden;
  height: 100vh;
}
.trailer_container::-webkit-scrollbar {
  display: none;
}

.background {
  position: sticky;
  /* margin-top: -100%; */
  top: 0%;
}
.foreground {
  position: sticky;
  top: 100%;
  z-index: 100;
}
.section {
  background-image: linear-gradient(to bottom, #1e140d 70%, #9c8c83 250%);
  height: 100vh;
  /* margin-top: -50%; */
  position: sticky;
  color: #f2ca95;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
}
.logo {
  height: 50vh;
}
.section2_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
