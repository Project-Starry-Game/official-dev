<template>
  <div class="trailer_container">
    <div class="img_container">
      <v-img class="background" ref="background" src="@/assets/building.png" />
          <img
            class="foreground"
            ref="foreground"
            src="@/assets/character.png"
          />
    </div>
    
    <div class="section section-1" ref="first">
      <div class="section1_container">
        <h1>STARRY</h1>
      </div>
        
    </div>
    <div class="section section-2" ref="second">
      <div class="section2_container">
        <p>Swallow the Black liquid, tell me what you see. </p>
        <p>A beautiful world with silence? A broken coffin ?Or even just that empty bottle in your hand.</p>
      </div>
    </div>
  
  </div>
  
</template>


<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: "Home",
  components: {},
  data: () => ({
      offsetTop: 0,
    }),

    methods: {
      onScroll (e) {
        this.offsetTop = e.target.scrollTop
      },
    },
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
      console.log(scrollY);
      // decreases as user scrolls
      first.value.style.opacity =
        (100 - (scrollY + window.innerHeight - first.value.offsetHeight)*0.2) / 100
      // increases as user scrolls
      // second.value.style.opacity =
      //   (scrollY + window.innerHeight - second.value.offsetTop*0.5) / 100
      second.value.style.opacity =
        ((scrollY + window.innerHeight - second.value.offsetTop)*0.2) / 100  
      const maxBackgroundSize = 150
      const backgroundSize = scrollY / ( maxBackgroundSize- 100) // increases as user scrolls
      // zoom the background at a slower rate
      background.value.style.transform =
        'scale(' + (100 + backgroundSize * 0.4) / 100 + ')'
      // foreground.value.style.transform =
      //   'scale(' + (100 + backgroundSize) / 100 + ')'
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
.img_container{
  background: #dbbb92;
  overflow: scroll;
  width: auto;
  height: 1925px;
    
}

.rect{
  background-image: linear-gradient(to bottom right, #2E231B 0%, #9C8C83 100%);
  opacity: 0.4;
  height: 100vh;
  width: 100vw;
  position: sticky;
  z-index:30;
  top: 0;
  left: 0;
}
img.background,
img.foreground {
  /* Fill background */
  min-height: 100%;
  min-width: 1024px;
  position: sticky;
  /* Scale proportionately */
  width: 100%;
  height: auto;
}
img.background{
  top: 0;
  left: 0;
  
}
img.foreground {
  left: 0;
  bottom: 0;
 
}

.section {
  min-height: 100vh;
  position: relative;
}
.section > div {
  position: fixed;
  color: white;
  /* centers this div */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.section-1 {
  margin-bottom: 500px; /* determines the gap between our two sections */
  font-size: 4em;
}

.section-2 {
  /* defaults to 0 because it's not visible */
  opacity: 0; 

  
}

.section-2 div {
  background-color: #2E231B;
  color: #dbbb92;
  min-width: 100vw;
  min-height: 100vh;
}

.section2_container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
}
.section-2 p {
  line-height: 150%;
  
}
.section1_container{
  background-image: linear-gradient(to bottom right, #2E231B 40%, #9C8C83 130%);
  width: 100vw;
  height: 50vh;
  
}
h1{
  color: #dbbb92;

}
.section1_container{
  display: flex;
  justify-items: center;

}
</style>