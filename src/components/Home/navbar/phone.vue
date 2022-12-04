<template>
  <div class="navbar">
    <v-btn
      @click="onEmit(item)"
      v-for="(item, index) in nav"
      :key="index"
      :icon="item.isActive ? 'mdi-circle-outline' : 'mdi-circle'"
      size="x-small"
    >
    </v-btn>
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  props: ["nav"],
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
  top: 10%;
  left: 90%;
  display: flex;
  flex-direction: column;
  width: 10vw;
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
