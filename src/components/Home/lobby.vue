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
import light1 from "@/assets/lobby/Lobby_LightSpot01.png";
import light2 from "@/assets/lobby/Lobby_LightSpot02.png";
import light3 from "@/assets/lobby/Lobby_LightSpot03.png";
import { defineComponent, onMounted, nextTick } from "vue";
import func from "vue-temp/vue-editor-bridge";
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
              setTimeout(callback, 1000 / 6);
            };
          })();

        let opacity = 1;

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

        let elements: any = [];
        for (let i = 0; i < 50; i++) {
          let ele = {
            opacity: 0.1,
            x: rnd(0, canvasBK.width),
            y: rnd(0, canvasBK.height),
            fadeRate: Math.random() * 0.1,
            img: new Image(),
            spirte: rndLightSprite(),
          };
          console.log(ele.fadeRate);

          ele.img.onload = function () {
            ctxDot.save();
            ctxDot.globalAlpha = 1;
            ctxDot.drawImage(ele.img, ele.x, ele.y);
            ctxDot.restore();
          };
          ele.img.src = ele.spirte;

          elements.push(ele);
        }
        elements.forEach((e: any) => {
          e.img = new Image();
          e.img.onload = function () {
            ctxDot.save();
            ctxDot.globalAlpha = 1;
            ctxDot.drawImage(e.img, e.x, e.y);
            ctxDot.restore();
          };
          e.img.src = e.spirte;
        });
        console.log(elements);

        const FRAMERATE_DOT = 1000;
        let timeDot = new Date().getTime();
        let lastTimeDot = new Date().getTime();

        const loopDot = function () {
          timeDot = new Date().getTime();
          if (timeDot - lastTimeDot < FRAMERATE_DOT) {
            requestAnimFrameDotEffect(loopDot);
            return;
          }
          return;

          let _width = window.screen.width;
          let _height = (_width * 1080) / 1920;
          canvasDot.width = _width;
          canvasDot.height = _height;
          elements.forEach((e: any) => {
            e.img = new Image();
            e.img.onload = function () {
              ctxDot.save();
              ctxDot.globalAlpha = e.opacity;
              ctxDot.drawImage(e.img, e.x, e.y);
              ctxDot.restore();
            };
            e.img.src = e.spirte;

            e.opacity -= e.fadeRate;
            if (e.opacity <= 0) {
              e.x = rnd(0, canvasDot.width);
              e.y = rnd(0, canvasDot.height);
              e.opacity = 0.5;
              e.spirte = rndLightSprite();
            }
          });

          lastTimeDot = timeDot;
          requestAnimFrameDotEffect(loopDot);
        };
        loopDot();

        function rnd(min: any, max: any) {
          return Math.floor(Math.random() * (max - min + 1) + min);
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
