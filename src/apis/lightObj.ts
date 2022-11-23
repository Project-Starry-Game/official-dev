class dot {}

// let elements: any = [];
// for (let i = 0; i < 50; i++) {
//   let ele = {
//     opacity: 1,
//     x: rnd(0, canvasBK.width),
//     y: rnd(0, canvasBK.height),
//     fadeRate: Math.random() * 0.1,
//     img: new Image(),
//     spirte: rndLightSprite(),
//   };
//   console.log(ele.fadeRate);

//   ele.img.onload = function () {
//     let _width = window.screen.width;
//     let _height = (_width * 1080) / 1920;
//     canvasDot.width = _width;
//     canvasDot.height = _height;
//     ctxDot.drawImage(ele.img, ele.x, ele.y, 10, 10);
//   };
//   ele.img.src = ele.spirte;

//   elements.push(ele);
// }

// let _width = window.screen.width;
//           let _height = (_width * 1080) / 1920;
//           canvasDot.width = _width;
//           canvasDot.height = _height;
//           elements.forEach((e: any) => {
//             e.img = new Image();
//             e.img.onload = function () {
//               ctxDot.save();
//               ctxDot.globalAlpha = e.opacity;
//               ctxDot.drawImage(e.img, e.x, e.y);
//               ctxDot.restore();
//             };
//             e.img.src = e.spirte;

//             e.opacity -= e.fadeRate;
//             if (e.opacity <= 0) {
//               e.x = rnd(0, canvasDot.width);
//               e.y = rnd(0, canvasDot.height);
//               e.opacity = 0.5;
//               e.spirte = rndLightSprite();
//             }
//           });
