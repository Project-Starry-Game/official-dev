<template>
  <v-container
    class="ma-0 pa-0 trailer_container overflow-y-auto"
    fluid
    id="scroll-target"
  >
    <!-- style="overflow: scroll; max-height: 95vh" -->
    <div class="section section-1" ref="first">
      <v-img class="logo" ref="logo" src="@/assets/logo_shadow.png" />
    </div>

    <div class="img_container" v-scroll:#scroll-target="onScroll">
      <v-img class="foreground" id="foreground" ref="foreground" src="@/assets/character.png" />
      <v-img class="background" id="background" ref="background" src="@/assets/building.png" />
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
import { ref } from 'vue'
export default {
  name: "Home",
  components: {},
  data: () => ({
    offsetTop: 0,
  }),

  methods: {
    onScroll (e) {
      this.offsetTop = e.target.scrollTop
       const foreground = ref(null);
    const background = ref(null);

    const maxBackgroundSize = 150;
    const backgroundSize = this.offsetTop / (maxBackgroundSize - 100);
    background.value.style.transform =
      'scale(' + (100 + backgroundSize * 0.4) / 100 + ')'
    },
    
  },
    
  setup() {
   
   
      
  
  return {
    foreground,
    background,
    first,
    second,
    }

  },

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
  background-image: linear-gradient(to bottom, #1e140d 30%, #9c8c83 150%);
  height: 90vh;
  opacity: 0.9;
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
ㄝ