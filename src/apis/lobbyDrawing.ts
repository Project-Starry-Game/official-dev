import { nextTick } from "vue";

const ratioW = 1080;
const ratioH = 1920;
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const _width = screenWidth;
const _height = (_width * ratioW) / ratioH;

export function oninitCanvas(
  lobbySprite: any,
  lightSprite: any,
  light1: any,
  light2: any,
  light3: any
) {
  nextTick(() => {
    const canvasBK: any = document.getElementById("lobbyCanvasBK"),
      ctxBK = canvasBK.getContext("2d");

    const canvas: any = document.getElementById("lobbyCanvas"),
      ctx = canvas.getContext("2d"),
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

    let backgoundImage = new Image();

    let lightImage = new Image();
    let lightOpacity = 1;
    let isDescending = true;

    let elements: any = [];

    drawBK();
    function drawBK() {
      backgoundImage = new Image();
      backgoundImage.onload = function () {
        canvasBK.width = _width;
        canvasBK.height = _height;
        ctxBK.save();
        ctxBK.globalAlpha = 1;
        ctxBK.drawImage(backgoundImage, 0, 0, _width, _height);
        ctxBK.restore();
      };
      backgoundImage.src = lobbySprite;
    }

    drawLight();
    function drawLight() {
      lightImage = new Image();
      lightImage.onload = function () {
        canvas.width = _width;
        canvas.height = _height;
        ctx.save();
        ctx.globalAlpha = lightOpacity;
        ctx.drawImage(lightImage, 0, 0, _width, _height);
        ctx.restore();
      };
      lightImage.src = lightSprite;
    }

    const FRAMERATE = 50;
    let time = new Date().getTime();
    let lastTime = new Date().getTime();
    const loop = function () {
      time = new Date().getTime();

      if (time - lastTime < FRAMERATE) {
        requestAnimFrame(loop);
        return;
      }

      updateLight();

      lastTime = time;
      requestAnimFrame(loop);
    };
    loop();

    function updateLight() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (isDescending) {
        lightOpacity -= 0.03;
        if (lightOpacity <= 0.01) {
          lightOpacity = 0.01;
          isDescending = false;
        }
      } else {
        lightOpacity += 0.03;
        if (lightOpacity >= 1) {
          lightOpacity = 1;
          isDescending = true;
        }
      }

      ctx.save();
      ctx.globalAlpha = lightOpacity;
      ctx.drawImage(lightImage, 0, 0, canvas.width, canvas.height);
      ctx.restore();
    }

    drawDots();
    function drawDots() {
      if (elements.length < 1) {
        for (let i = 0; i < 30; i++) {
          let ele = {
            opacity: 0.3,
            x: rndAreaX,
            y: rndAreaY,
            size: rndSize(),
            fadeRate: Math.random() * 0.01,
            img: new Image(),
            spirte: rndLightSprite(light1, light2, light3),
            fadingOut: true,
          };
          elements.push(ele);
        }
      }

      elements.forEach((element: any) => {
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
      });
    }

    const FRAMERATE_DOT = 50;
    let timeDot = new Date().getTime();
    let lastTimeDot = new Date().getTime();
    const loopDot = function () {
      timeDot = new Date().getTime();

      if (timeDot - lastTimeDot < FRAMERATE_DOT) {
        requestAnimFrameDotEffect(loopDot);
        return;
      }
      updateDots();

      lastTimeDot = new Date().getTime();
      requestAnimFrameDotEffect(loopDot);
    };
    loopDot();

    function updateDots() {
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
          element.spirte = rndLightSprite(light1, light2, light3);
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
  });
}

function rnd(min: any, max: any) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function rndLightSprite(light1: any, light2: any, light3: any) {
  let n = rnd(0, 2);
  if (n == 0) return light1;
  else if (n == 1) return light2;
  else return light3;
}

function rndAreaX() {
  let w = screenWidth;
  let n = 0;
  n = rnd(0, 4);
  if (n == 0) {
    return rnd(240, w / 2);
  } else {
    return rnd(w / 2, w);
  }
}

function rndAreaY() {
  let h = screenHeight;
  return rnd(0, h / 2);
}

function rndSize() {
  let w = screenWidth / 150;
  return rnd(w, w + 5);
}
