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
        <v-img :src="imgs[index]" />
      </div>
    </v-btn>
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  props: ["nav", "imgs"],
  data() {
    return {};
  },
  methods: {
    onEmit(ele) {
      this.$emit("on-change", ele);
    },
  },
  mouted() {},
};
</script>

<style>
.navbar {
  display: inline-block;
  /*border: 1px solid red;*/
  position: fixed;
  top: 30%;
  left: 90%;
  display: flex;
  flex-direction: column;
  width: 6vw;
  height: 50vh;
  justify-content: space-around;
  /* align-items:flex-end; */
  z-index: 1;
  padding: 0;
}
a {
  color: rgb(112, 108, 102);
  text-decoration: none;
  font-weight: bolder;
}

.eye_open {
  width: 100px;
  height: 100px;
  /*border: 1px solid rosybrown;*/
}
</style>
