<template>
  <div class="furniture_img">
    <div class="slider">
      <div class="slide-track">
        <div class="slide" v-for="(img, index) in this.imgs" :key="index">
          <v-img
            :src="img.src"
            :width="img.width"
            :height="img.height"
            alt=""
            @click="test()"
          />
        </div>
        <div class="slide" v-for="(img, index) in this.imgs" :key="index">
          <v-img
            :src="img.src"
            :width="img.width"
            :height="img.height"
            alt=""
            @click="test()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["imgs"],
  mounted() {},
  methods: {
    test() {
      console.log(1);
    },
  },
};
</script>

<style>
.furniture_img {
  background-color: aquamarine;
  width: 100vw;
  min-height: 100vh;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.slider {
  height: 250px;
  margin: auto;
  position: relative;
  width: 90%;
  display: grid;
  place-items: center;
}

.slide-track {
  display: flex;
  width: calc(250px * 16);
  animation: scroll 30s linear infinite;
}

.slide-track:hover {
  animation-play-state: paused;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 8));
  }
}

.slide {
  height: 250px;
  width: 250px;
  display: flex;
  align-items: center;
  padding: 15px;
  perspective: 100px;
}

.v-img {
  width: 100%;
  transition: transform 1s;
}

.v-img:hover {
  transform: translateZ(20px);
}

.slider::before,
.slider::after {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  content: "";
  height: 100%;
  position: relative;
  width: 15%;
  z-index: 2;
}

.slider::before {
  left: 0%;
  top: 0%;
}

.slider::after {
  right: 0%;
  top: 0;
  transform: rotate(180deg);
}
</style>
