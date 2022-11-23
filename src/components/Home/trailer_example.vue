<template>
  <div>
    <v-container
      fluid
      id="scroll-target"
      class="ad_container overflow-y-auto ma-0 pa-0 trailer"
      v-scroll:#scroll-target="onScroll"
    >

      <div class="img_container" id="logo_box">
       
      </div>
      <div class="background">
      </div>
      <div class="text">
        
      </div>
    </v-container>
    <div class="box"></div>
  </div>
</template>

<script setup>
import bg_builder from "@/assets/bgwithcc.png";
import butterflylogo from "@/assets/logo_shadow.png";
</script>

<script>
export default {
  name: "Home",
  data: () => ({
  }),
  }

</script>

<style>
.trailer {
  overflow: hidden;
}
.ad_container {
  border: 3px solid rgb(151, 0, 0);
  position: relative;
  top: 0%;
  overflow: scroll;
  overflow-x: hidden;
  max-height: 80vh;
  background-color: rgb(186, 78, 78);
}
div{
  border: 1px solid black;
}

.background{
  position: absolute;
  top: 0%;
  width:100vw;
  height: 200vh;
  background: #ccc;
  z-index: 10;
}

.img_container{
  position: sticky;
  top: 10px;
  z-index: 100;
  border: 3px solid rgb(132, 164, 0);
  width: 100vw;
  height:200px;
}

.text{
  position: sticky;
  top: 100%;
  z-index: 1000;
  border: 3px solid rgb(37, 118, 180);
  height: 300px;
}


.box{
  height: 200vh;
}
</style>
