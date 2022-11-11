<template>
<<<<<<< HEAD
<<<<<<< HEAD
  <v-row 
    class="flex-nowrap"
    id="row_img"
  > 
      <v-img 
        class="furniture_img p-7"
        v-for="(img, index) in this.imgs" 
        :key="index" :src="img.src" :width="img.width" :align="align"
        height="300px">
      </v-img>
=======
  <v-row class="flex-nowrap" id="row_img">
    <v-img
      class="furniture_img p-7"
      v-for="(img, index) in this.imgs"
      :key="index"
      :src="img.src"
      :width="img.width"
      :align="align"
      height="300px"
    >
    </v-img>
>>>>>>> be79fa1 (Remove used console)
  </v-row>
=======
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
>>>>>>> 44d889d (Setup index componetns excluding trailer)
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
<<<<<<< HEAD
.box{
  background-color: rgb(127, 115, 151);
}
.furniture_img{
=======
.furniture_img {
>>>>>>> be79fa1 (Remove used console)
  background-color: aquamarine;
<<<<<<< HEAD
  /* padding: 30%; */
=======
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
>>>>>>> 44d889d (Setup index componetns excluding trailer)
}
</style>
