<template>
  <div class="eyes">
    <div class="eye">
      <v-img class="eyeball" :src="eyeball" />
      <v-img :src="eye" />
      <!-- <div class="eyeball" /> -->
    </div>

    <div class="eye">
      <v-img class="eyeball" :src="eyeball" />
      <v-img :src="eye" />
    </div>

    <div class="eye">
      <v-img class="eyeball" :src="eyeball" />
      <v-img :src="eye" />
    </div>

    <div class="eye">
      <v-img class="eyeball" :src="eyeball" />
      <v-img :src="eye" />
    </div>
  </div>
</template>

<script setup lang="ts">
import eye from "../../assets/Reincarnate_Cover.png";
import eyeball from "../../assets/Reincarnate_Eyeball.png";
</script>

<script lang="ts">
export default {
  data() {
    return {
      mousePosX: 0,
      mousePosY: 0,
    };
  },
  mounted() {
    document.addEventListener("mousemove", (e) => {
      var eyeball = document.getElementsByClassName("eyeball");
      this.mousePosX = (e.clientX * 100) / window.innerWidth + "%";
      this.mousePosY = (e.clientY * 100) / window.innerHeight + "%";
      // console.log(this.mousePosX, this.mousePosY);

      for (var i = 0; i < 4; i++) {
        eyeball[i].style.left = this.mousePosX;
        eyeball[i].style.top = this.mousePosY;
        eyeball[i].style.transform =
          "translate(-" + this.mousePosX + ",-" + this.mousePosY + ")";
      }
    });
  },
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  margin: 60px;
} */

eyes {
  position: sticky;
  width: 100vw;
  height: 100vh;
  top: 50%;
  transform: translateY(-50%);
  justify-content: center;
  text-align: center;
  background-color: rgb(42, 42, 33);
}
.eye {
  width: 7rem;
  height: auto;
  background: #fff;
  display: inline-block;
  margin: 40px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}

.eyeball {
  width: 4rem;
  height: auto;
  /* background: #000; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  /* border: 15px solid #333; */
}
</style>
