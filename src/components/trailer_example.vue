<template>
  <div class="root">
    <!-- <div class="section section-1" id="first" ref="first">
      <v-img class="logo" ref="logo" src="@/assets/logo_shadow.png" />
       
    </div> -->
    <v-img class="background" ref="background" src="@/assets/building.png" />
    <v-img
      class="foreground" ref="foreground" src="@/assets/character.png" />

    <!-- <div class="section section-2" ref="second" >
      <div class="section2_container">
        <p>Swallow the Black liquid, tell me what you see.</p>
        <p>
          A beautiful world with silence? A broken coffin ?Or even just that
          empty bottle in your hand.
        </p>
      </div>
    </div> -->
  </div>
</template>


<script>
import { ref, onMounted, onUnmounted } from 'vue'
export default {
  setup() {
    const foreground = ref(null)
    const background = ref(null)
    const first = ref(null)
    const second = ref(null)

    onMounted(() => {
      document.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      document.removeEventListener('scroll', handleScroll)
    })

  const handleScroll = (evt) => {
    const scrollY = window.scrollY
    // decreases as user scrolls
    first.value.style.opacity =
      (100 - (scrollY + window.innerHeight - first.value.offsetHeight)) / 100
    // increases as user scrolls
    second.value.style.opacity =
      (scrollY + window.innerHeight - second.value.offsetTop) / 100

    const maxBackgroundSize = 120
    const backgroundSize = scrollY / (maxBackgroundSize - 100) // increases as user scrolls

    // zoom the background at a slower rate
    background.value.style.transform =
      'scale(' + (100 + backgroundSize * 0.4) / 100 + ')'
    foreground.value.style.transform =
      'scale(' + (100 + backgroundSize) / 100 + ')'
  }




    return {
      foreground,
      background,
      first,
      second,
    }
  },
}
</script>


<style>
.root{
  background: #2e231b;
  overflow: scroll;
  overflow-x: hidden;
  height: 300vh;
  width:  90vw;

}

.foreground {
  /* Fill background */
  /* min-height: 100%;
  min-width: 1024px; */
  position: sticky;
  /* Scale proportionately */
  /* width: 100%;
  height: auto; */
}

.background {
  /* Positioning */
  /* position: sticky; */
  object-fit:cover;  
  min-width:100%;
  min-height: 100%;
  top: 0;
  left: 0;
}
.section {
  min-height: 100vh;
  position: relative;
}
/* .section > div {
  position: fixed;
  color: white;
  centers this div
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
} */

.section-1 {
  margin-bottom: 500px; /* determines the gap between our two sections */
  font-size: 4em;
}
.logo {
  height: 50vh;
}

.section-2 {
  opacity: 0; /* defaults to 0 because it's not visible */
}

/* .section-2 div {
  background-color: rgba(255, 255, 255, 0.7);
  color: black;
  text-align: center;
  padding: 50px;
  max-width: 300px;
} */

.section-2 h2 {
  font-size: 2em;
  margin-bottom: 40px;
}

.section-2 p {
  line-height: 150%;
}

</style>