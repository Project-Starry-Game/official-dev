<template>
  <div id="canvas_block" class="canvas_block">
    <canvas id="lobbyCanvasBK" class="lobbyCanvasBK"> </canvas>
    <canvas
      id="lobbyCanvas"
      class="lobbyCanvas"
      style="position: absolute; top: 0; left: 0"
    ></canvas>
    <canvas
      id="lobbyCanvasDot"
      class="lobbyCanvasDot"
      style="position: absolute; top: 0; left: 0"
    ></canvas>
  </div>
</template>

<script lang="ts">
import lobbyImage from "@/assets/lobby/mainLobby.png";
import lightImage from "@/assets/lobby/light.png";
import light1 from "@/assets/icon.png";
import light2 from "@/assets/lobby/Lobby_LightSpot02.png";
import light3 from "@/assets/lobby/Lobby_LightSpot03.png";
import { defineComponent, onMounted, nextTick } from "vue";
export default defineComponent({
  name: "my",
  props: {},
  setup() {
    const oninitCanvas = () => {
      nextTick(() => {
        const canvasBK: any = document.getElementById("lobbyCanvasBK"),
          ctxBK = canvasBK.getContext("2d");

        const canvas: any = document.getElementById("lobbyCanvas"),
          ctx = canvas.getContext("2d"),
          // height: number = canvas.offsetHeight,
          // width: number = canvas.offsetWidth,
          requestAnimFrame = (function () {
            return function (callback: any) {
              setTimeout(callback, 100 / 6);
            };
          })();

        const canvasDot: any = document.getElementById("lobbyCanvasDot"),
          ctxDot = canvas.getContext("2d"),
          // height: number = canvas.offsetHeight,
          // width: number = canvas.offsetWidth,
          requestAnimFrameDotEffect = (function () {
            return function (callback: any) {
              setTimeout(callback, 100 / 6);
            };
          })();

        let opacity = 1;
        let elements: any = [];

        drawBK();
        drawLight();

        // Control animation rate
        const FRAMERATE = 50;
        let time = new Date().getTime();
        let lastTime = new Date().getTime();
        let isDescending = true;
        // document.getElementById("canvas_block")!.style.height = canvasBK.height;
        const loop = function () {
          time = new Date().getTime();

          if (time - lastTime < FRAMERATE) {
            requestAnimFrame(loop);
            return;
          }

          if (isDescending) {
            opacity -= 0.01;
            if (opacity <= 0.01) {
              opacity = 0.01;
              isDescending = false;
            }
          } else {
            opacity += 0.01;
            if (opacity >= 1) {
              opacity = 1;
              isDescending = true;
            }
          }
          drawLight();

          lastTime = time;
          requestAnimFrame(loop);
        };
        loop();

        // let elemetns: any = [];
        // for (let i = 0; i < 5; i++) {
        //   let ele = {
        //     opacity: 1,
        //     x: rnd(0, canvasBK.width),
        //     y: rnd(0, canvasBK.height),
        //     fadeRate: rndFloat(0, 1),
        //     img: null,
        //     spirte: rnd(0, 2),
        //   };
        //   elemetns.push(ele);
        // }

        const FRAMERATE_DOT = 40;
        let timeDot = new Date().getTime();
        let lastTimeDot = new Date().getTime();
        const loopDot = function () {
          timeDot = new Date().getTime();

          if (timeDot - lastTimeDot < FRAMERATE_DOT) {
            requestAnimFrameDotEffect(loopDot);
            return;
          }
          drawDots();
          lastTimeDot = lastTimeDot;
          requestAnimFrameDotEffect(loopDot);
        };
        loopDot();

        function rnd(min: any, max: any) {
          return Math.floor(Math.random() * (max - min + 1) + min);
        }
        function rndFloat(min: any, max: any) {
          return Math.random() * (max - min + 1) + min;
        }

        function rndLightSprite() {
          let n = rnd(0, 2);
          if (n == 0) return light1;
          else if (n == 1) return light2;
          else return light3;
        }

        function drawBK() {
          let backgoundImage = new Image();
          backgoundImage.onload = function () {
            let _width = window.screen.width;
            let _height = (_width * 1080) / 1920;
            canvasBK.width = _width;
            canvasBK.height = _height;
            ctxBK.save();
            ctxBK.globalAlpha = 1;
            ctxBK.drawImage(backgoundImage, 0, 0, _width, _height);
            ctxBK.restore();
          };
          backgoundImage.src = lobbyImage;
          drawDots();
        }

        function drawLight() {
          let lightMask = new Image();
          lightMask.onload = function () {
            let _width = window.screen.width;
            let _height = (_width * 1080) / 1920;
            canvas.width = _width;
            canvas.height = _height;
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.drawImage(lightMask, 0, 0, _width, _height);
            ctx.restore();
          };
          lightMask.src = lightImage;
          drawDots();
        }
        function drawDots() {
          if (elements.length < 10) {
            for (let i = 0; i < 10; i++) {
              let ele = {
                opacity: 1,
                x: rnd(0, canvasBK.width),
                y: rnd(0, canvasBK.height),
                fadeRate: Math.random() * 0.1,
                img: new Image(),
                spirte: light1,
              };
              let test = new Image();
              test.onload = function () {
                let _width = window.screen.width;
                let _height = (_width * 1080) / 1920;
                canvasDot.width = _width;
                canvasDot.height = _height;
                ctxDot.drawImage(test, ele.x, ele.y, 20, 20);
              };
              test.src = light1;
              elements.push(ele);
            }
          } else {
          }
        }
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
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: black;
  overflow: scroll;
}
.canvas_block {
  margin-bottom: -10px;
}
#canvas {
  padding-left: 0;
  padding-right: 0;
  margin-left: auto;
  margin-right: auto;
}
</style>
