<template>
  <div class="eyes">
    <v-container fluid class="pa-0 ma-0" style="height: 100vh">
      <v-row v-for="i in 10">
        <v-col>
          <div class="eye" v-for="j in i % 2 === 0 ? 6 : 5">
            <v-img class="eyeball" :src="eyeball" />
            <v-img :src="eye" />
            <!-- <div class="eyeball" /> -->
          </div>
        </v-col>
      </v-row>
    </v-container>
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

      for (var i = 0; i < eyeball.length; i++) {
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

.eyes {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 50%;
  transform: translateY(-50%);
  justify-content: center;
  text-align: center;
  background-color: rgb(0, 0, 0);
  z-index: -1;
}
.eye {
  width: 7rem;
  height: auto;
  background: #fff;
  display: inline-block;
  margin: 40px;
  border-radius: 50%;
  opacity: 30%;
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
  border-radius: 30%;
  opacity: 50%;
  /* border: 15px solid #333; */
}
</style>
