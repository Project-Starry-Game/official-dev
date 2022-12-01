<template>
  <div class="navbar">
    
    <v-btn
      id=""
      @click="onEmit(item)"
      v-for="(item, index) in nav"
      :key="index"
      elevation="0"
      color="transparent"
    >
      <div class="eye_open">
        <v-img :src="eyeball" />
      </div>

      <span>
        {{ item.name }}
      </span>

      <!-- <span class="text-white">
        {{ item.name }}
      </span> -->
    </v-btn>

    <!-- <a 
            :width="dot.width"
            :height="dot.height"
            href="">
        </a> -->
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
      nav: [
        { name: "1", src:"eyeball", id: "trailer_pos", fade: true },
        { name: "Lobby", id: "goDowntoLobby", fade: false },
        { name: "Intro", id: "gameIntro_pos", fade: false },
      ],
    };
  },
  methods: {
    onEmit(ele) {
      console.log(ele);
      this.$emit("on-change", ele);
    },
  },
};
</script>

<style>
.navbar {
  border: 1px solid red;
  position: sticky;
  top: 30%;
  left: 90%;
  display: flex;
  flex-direction: column;
  width: 6vw;
  height: 50vh;
  justify-content: space-around;
  /* align-items:flex-end; */
  z-index: 1;
}
a {
  color: rgb(112, 108, 102);
  text-decoration: none;
  font-weight: bolder;
}

.eye_open{
  width: 100px;
  height: 100px;
  border: 1px solid rosybrown;
}
</style>
