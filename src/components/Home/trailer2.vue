<template>
  <v-img
    class="background"
    id="background"
    ref="background"
    :src="bg_builder"
  />
</template>

<script setup>
import bg_builder from "@/assets/bgwithcc.png";
import butterflylogo from "@/assets/logo_shadow.png";
</script>

<script>
export default {
  name: "Home",
  data: () => ({
    offsetTop: 0,
  }),
  components: {},
  mounted() {},
  methods: {
    onScroll(e) {
      var bk = document.getElementById("background");
      var logo_box = document.getElementById("logo_box");
      var logo = document.getElementById("logo");
      var text_section = document.getElementById("text_section");
      this.offsetTop = e.target.scrollTop;

      console.log(logo.style.transform);
      logo_box.style.opacity =
        1 - this.offsetTop / (e.target.scrollHeight - window.innerHeight);
      logo.style.transform =
        "scale(" +
        this.offsetTop / (e.target.scrollHeight - window.innerHeight) +
        ")";

      text_section.style.opacity =
        (this.offsetTop / (e.target.scrollHeight - window.innerHeight)) * 2;
    },
  },
};
</script>
