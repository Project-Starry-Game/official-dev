<template>
<<<<<<< HEAD
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
=======
  <v-row class="flex-nowrap" id="row_img">
    <v-img
      class="furniture_img p-7"
      v-for="(img, index) in this.imgs"
      :key="index"
      :src="img.src"
      :width="img.width"
      :align="align"
      height="300px"
    >
    </v-img>
>>>>>>> be79fa1 (Remove used console)
  </v-row>
</template>

<script>
export default {
  name: "Home",
  props: ["imgs"],
  mounted() {},
};
</script>

<style>
<<<<<<< HEAD
.box{
  background-color: rgb(127, 115, 151);
}
.furniture_img{
=======
.furniture_img {
>>>>>>> be79fa1 (Remove used console)
  background-color: aquamarine;
  /* padding: 30%; */
}
</style>
