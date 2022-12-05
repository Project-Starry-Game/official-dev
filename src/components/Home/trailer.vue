<template>
  <div style="position: relative">
    <div style="z-index: 5">
      <other class="hidden-xs" @on-change="scrollToNextSection" />
      <xs class="hidden-sm-and-up" />
    </div>
    <div
      style="position: sticky; background-color: #fff; height:100vh; width 100vw; z-index:2"
    />
  </div>
</template>

<script setup lang="ts">
import xs from "@/components/Home/trailer/phone.vue";
import other from "@/components/Home/trailer/desktop.vue";
</script>

<script lang="ts">
export default {
  setup() {},

  mounted() {},

  data: () => ({
    offsetTop: 0,
  }),

  methods: {
    scrollToNextSection(ele) {
      this.$emit("on-change", ele);
    },
  },
};
</script>

<style>
/* .trailer {
  position: relative;
  top: 0%;
  overflow-x: hidden;
  max-height: 100vh;
}

.img_container {
  display: flex;
  justify-content: center;
  position: sticky;
  top: 10%; 
  width: 100vw;
  z-index: 100;
}
.img_logo {
  position: relative;
  width: 40%;
}
.background_box {
  width: 100vw;
  height: auto;
  position: absolute;
  top: 0%;
  z-index: 10;
}
.text_section {
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 43%,
    rgba(46, 35, 27, 0) 100%
  );
  color: rgb(254, 255, 249);
  width: 100vw;
  height: 90vh;
  display: flex;
  position: sticky;
  top: 0%;
  z-index: 1000;
  opacity: 0%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;
}
.scrolldown_box {
  position: absolute;
  bottom: 1%;
  width: 100vw;
  height: 6vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
}
a#scroll-btn {
  height: 1rem;
  width: 1rem;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  animation: move-down 2s infinite;
  margin-top: -1rem;
}
@keyframes move-down {
  50% {
    opacity: 0;
  }
  100% {
    transform: translateY(1.5rem);
    opacity: 0;
  }
}
.scrolldown_text {
  font-size: 1rem;
  color: #fff;
} */
</style>
  