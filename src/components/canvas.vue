<template>
  <body>
    <canvas class="ad_container" id="canvas"> </canvas>
  </body>
</template>

<script>
import { onMounted, onUnmounted } from "vue";
export default {
  name: "Home",
  data: () => ({
    offsetTop: 0,
  }),
  components: {},
  setup() {
    onMounted(() => {
      const canvas = document.getElementById("canvas");
      const context = canvas.getContext("2d");
      context.canvas.width = window.innerWidth;
      context.canvas.height = window.innerHeight;

      const background_img = new Image();
      background_img.src = require("@/assets/building.png");
      background_img.onload = function () {
        context.drawImage(background_img, 0, 0, 1920, 1925);
      };
    });
    return {};
  },

  methods: {
    onScroll(e) {
      // this.offsetTop = e.target.scrollTop;
      // var trailer_container = document.getElementById("scroll-target");
      // const maxScrollTop = trailer_container.scrollHeight - window.innerHeight;
      // // const maxBackgroundSize = 150;
      // // const backgroundSize = this.offsetTop / (maxBackgroundSize - 100);
      // var bk = document.getElementById("background");
      // // bk.style.transform = "scale(" + (100 + backgroundSize * 5) / 100 + ")";
      // background.style.transform =
      //   "scale(" + (1 + Math.pow(this.offsetTop / maxScrollTop, 2)) + ")";
      // console.log(this.offsetTop);
      // console.log(trailer_container.scrollHeight);
      // first.style.opacity =
      //   (150 - (this.offsetTop + window.innerHeight - first.offsetHeight)) /
      //   100;
    },
  },
};
</script>

<style>
/* .trailer_container {
  background: #2e231b;
  overflow: scroll;
  overflow-x: hidden;
  height: 100vh;
  width:  100vw;
} */
/* .trailer_container::-webkit-scrollbar {
  display: none;
} */
body{
  height: 200vh;
}
canvas {
  /* width: 100%;
  height: 100%; */
  position: fixed;
  left: 50%;
  right: 50%;
  transform: translate(-50%,-50%);
  max-height: 100vh;

}

.background {
  position: sticky;
  /* margin-top: -100%; */
  opacity: 30%;
  top: 0%;
  z-index: 10;
}
.foreground {
  position: sticky;
  top: 0%;
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
  z-index: 300;
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
