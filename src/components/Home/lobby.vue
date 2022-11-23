<template>
  <div class="lobby_block">
    <canvas id="lobbyCanvas" class="lobbyCanvas"></canvas>
  </div>
</template>

<script lang="ts">
import lobbyImage from "@/assets/lobby/mainLobby.png";
import lightImage from "@/assets/lobby/light.png";
import { defineComponent, onMounted, nextTick } from "vue";
export default defineComponent({
  name: "my",
  props: {},
  setup() {
    // 创建canvas动画
    const oninitCanvas = () => {
      nextTick(() => {
        const canvas: any = document.getElementById("lobbyCanvas"),
          ctx = canvas.getContext("2d"),
          height: number = canvas.offsetHeight,
          width: number = canvas.offsetWidth,
          requestAnimFrame = (function () {
            return function (callback: any) {
              setTimeout(callback, 100 / 6);
            };
          })();

        let backgoundImage = new Image();
        backgoundImage.onload = function () {
          ctx.drawImage(backgoundImage, 0, 0, 820, 461.25);
        };
        backgoundImage.src = lobbyImage;

        // let lightMask = new Image();
        // lightMask.onload = function () {
        //   ctx.drawImage(lightMask, 0, 0, lightImage.width, lightImage.height);
        // };
        // lightMask.src = lightImage;

        console.log(window.screen.height);

        const loop = function () {
          // ctx.clearRect(0, 0, width, height);
          // ctx.drawImage(backgoundImage, 0, 0, 1920, 1080);
          requestAnimFrame(loop);
        };
        // const random = function (min: number, max: number) {
        //   return Math.floor(Math.random() * (max - min) + min);
        // };
        loop();
        // function aspect(srcWidth, srcHeight, maxWidth, maxHeight) {
        //   var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

        //   return { width: srcWidth * ratio, height: srcHeight * ratio };
        // }
      });
    };

    onMounted(() => {
      oninitCanvas();
    });
  },
});
</script>
<style>
.lobby_block {
  position: relative;
  overflow: auto;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: black;
  overflow: scroll;
}
#canvas {
  padding-left: 0;
  padding-right: 0;
  margin-left: auto;
  margin-right: auto;
}
.lobbyCanvas {
  height: 100%;
  width: 1920px;
  display: inline-block;
}
</style>
