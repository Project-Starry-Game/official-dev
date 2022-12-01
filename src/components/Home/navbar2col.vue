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
      <span class="text-white">
        {{ item.name }}
      </span>
    </v-btn>

    <!-- <a 
            :width="dot.width"
            :height="dot.height"
            href="">
        </a> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        { name: "trailer", id: "trailer_pos", fade: true },
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
  position: fixed;
  top: 30%;
  right: 3rem;
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 50vh;

  justify-content: space-around;
  align-content: center;
}
a {
  color: rgb(234, 223, 210);
  text-decoration: none;
  font-weight: bolder;
}
</style>
