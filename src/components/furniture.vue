<template>
  <v-row 
    class="flex-nowrap"
    id="row_img"
  >
    <v-img 
      v-for="(img, index) in this.imgs" 
      :key="index" :src="img.src" :width="img.width" :align="align">
    </v-img>
  </v-row>
</template>

<script>
export default {
  name: "Home",
  props: ["imgs"],
  mounted() {
    // console.log(this.imgs);
    var row_img = document.getElementById("row_img");
    // row_img.style.left = (row_img.style.left +1700) +"px";
  },
};
</script>
 
<style>

</style>
