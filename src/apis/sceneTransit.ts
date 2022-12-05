let ableToTransisit = true;

export function fading(className: any, duration: any, callback: any = null) {
  if (ableToTransisit == false) return;

  let body = document.body;
  body.classList.add(className);
  setTimeout(() => {
    body.classList.remove(className);
    ableToTransisit = true;
  }, duration);

  if (callback != null) {
    callback();
  }
}
