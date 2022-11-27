<template>
  <div id="canvas_block" style="relative">
    <div style="position: relative; margin-bottom: -10px">
      <canvas id="lobbyCanvasBK" class="lobbyCanvasBK"></canvas>
      <canvas id="lobbyCanvasDot" class="overlayCanvas"></canvas>
      <canvas id="lobbyCanvas" class="overlayCanvas"></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import lobbyImage from "../../assets/lobby/mainLobby.png";
import lightImage from "../../assets/lobby/light.png";
import light1 from "../../assets/lobby/Lobby_LightSpot01.png";
import light2 from "../../assets/lobby/Lobby_LightSpot02.png";
import light3 from "../../assets/lobby/Lobby_LightSpot03.png";
</script>

<script lang="ts">
import { defineComponent, onMounted, nextTick } from "vue";
export default defineComponent({
  name: "Lobby",
  props: {},
  setup() {
    onMounted(() => {
      console.log("onMounted");
    });
  },

  methods: {
    oninitCanvas() {
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
          ctxDot = canvasDot.getContext("2d"),
          requestAnimFrameDotEffect = (function () {
            return function (callback: any) {
              setTimeout(callback, 100 / 6);
            };
          })();

        let opacity = 1;
        let elements: any = [];

        drawBK().then((e) => {
          // console.log(e);
        });
        drawLight().then((e) => {
          // console.log(e);
        });

        loaddrawDots();

        // Control animation rate
        const FRAMERATE = 50;
        let time = new Date().getTime();
        let lastTime = new Date().getTime();
        let isDescending = true;
        const loop = function () {
          time = new Date().getTime();

          if (time - lastTime < FRAMERATE) {
            requestAnimFrame(loop);
            return;
          }

          if (isDescending) {
            opacity -= 0.03;
            if (opacity <= 0.01) {
              opacity = 0.01;
              isDescending = false;
            }
          } else {
            opacity += 0.03;
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

        const FRAMERATE_DOT = 50;
        let timeDot = new Date().getTime();
        let lastTimeDot = new Date().getTime();
        const loopDot = function () {
          timeDot = new Date().getTime();

          if (timeDot - lastTimeDot < FRAMERATE_DOT) {
            requestAnimFrameDotEffect(loopDot);
            return;
          }
          drawDots();

          lastTimeDot = new Date().getTime();
          requestAnimFrameDotEffect(loopDot);
        };
        loopDot();

        function rnd(min: any, max: any) {
          return Math.floor(Math.random() * (max - min + 1) + min);
        }

        function rndLightSprite() {
          let n = rnd(0, 2);
          if (n == 0) return light1;
          else if (n == 1) return light3;
          else return light2;
        }

        function drawBK() {
          return new Promise((resolve) => {
            let backgoundImage = new Image();
            backgoundImage.onload = function () {
              let _width = window.screen.width;
              let _height = (_width * 1080) / 1920;
              console.log(_width, _height);
              canvasBK.width = _width;
              canvasBK.height = _height;
              ctxBK.save();
              ctxBK.globalAlpha = 1;
              ctxBK.drawImage(backgoundImage, 0, 0, _width, _height);
              ctxBK.restore();
              resolve("BK");
            };
            backgoundImage.src = lobbyImage;
          });
        }

        function drawLight() {
          return new Promise((resolve) => {
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
              resolve("Light");
            };
            lightMask.src = lightImage;
          });
        }

        function rndAreaX() {
          let w = window.screen.width;
          let n = 0;
          n = rnd(0, 4);
          if (n == 0) {
            return rnd(240, w / 2);
          } else {
            return rnd(w / 2, w);
          }
        }

        function rndAreaY() {
          let h = window.screen.height;
          return rnd(0, h / 2);
        }

        function rndSize() {
          let w = window.screen.width / 100;
          return rnd(w, w + 5);
        }

        function drawDots() {
          ctxDot.clearRect(0, 0, canvasDot.width, canvasDot.height);
          elements.forEach((element: any) => {
            if (element.fadingOut) element.opacity -= element.fadeRate;
            else element.opacity += element.fadeRate * 2;

            element.x -= 0.7;
            element.y += 0.5;

            if (element.opacity <= 0.05) {
              element.fadingOut = false;
              element.x = rndAreaX();
              element.y = rndAreaY();
              element.fadeRate = Math.random() * 0.02;
              element.spirte = rndLightSprite();
              element.size = rndSize();
            } else if (element.opacity > 0.3) {
              element.fadingOut = true;
            }
            ctxDot.save();
            ctxDot.globalAlpha = element.opacity;
            ctxDot.drawImage(
              element.img,
              element.x,
              element.y,
              element.size,
              element.size
            );
            ctxDot.restore();
          });
        }

        function loaddrawDots() {
          let w = window.screen.width;
          let h = window.screen.height;
          if (elements.length < 1) {
            for (let i = 0; i < 30; i++) {
              let ele = {
                opacity: 0.3,
                x: rndAreaX,
                y: rndAreaY,
                size: rndSize(),
                fadeRate: Math.random() * 0.01,
                img: new Image(),
                spirte: rndLightSprite(),
                fadingOut: true,
              };
              elements.push(ele);
            }
          }

          // ctxDot.clearRect(0, 0, canvasDot.width, canvasDot.height);
          elements.forEach((element: any) => {
            let _width = window.screen.width;
            let _height = (_width * 1080) / 1920;
            canvasDot.width = _width;
            canvasDot.height = _height;

            element.img.onload = function () {
              ctxDot.save();
              ctxDot.globalAlpha = element.opacity;
              ctxDot.drawImage(
                element.img,
                element.x,
                element.y,
                element.size,
                element.size
              );
              ctxDot.restore();
            };
            element.img.src = element.spirte;
            // element.img = img;
          });
        }
      });
    },
  },

  mounted() {
    console.log("mouted lobby");
    this.oninitCanvas();
  },
});
</script>
<style>
.lobby_block {
  position: relative;
}
.canvas_block {
  margin-bottom: -10px;
}
.overlayCanvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
