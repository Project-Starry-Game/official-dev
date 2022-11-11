<template>
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
.box{
  background-color: rgb(127, 115, 151);
}
.furniture_img{
  background-color: aquamarine;
  /* padding: 30%; */
}
</style>
