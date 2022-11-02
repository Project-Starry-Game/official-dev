<template>
  <div class="home">
    <!-- <linstener/> -->
      <trailer />
      <div class="body">
        <navbar/>
        <outline />
      </div>
    <!-- <carousel />
    <div class="container">
      <div class="row p-2">
        <div
          class="col-lg p-2 bg-dark d-flex justify-content-center"
          v-for="i in cardDatas.length"
          :key="i"
        >
          <card :datas="cardDatas[i - 1]" />
        </div>
      </div> 
      </div>
      <div class="p-5">
        <carousel :datas="carousel2Datas" />
        <text2 class="bg-light" msg="A Passion for Games" />
      </div> -->
  </div>    
  
</template>


<script>
// @ is an alias to /src
// import carousel from "@/components/Home/carousel.vue";
// import card from "@/components/Home/card.vue";
import trailer from "@/components/scrollEventListener.vue";
import navbar from "@/components/navbar.vue";
import outline from "@/components/outline.vue";
// import lobby from "@/components/Home/lobby.vue";
import linstener from "@/components/scrollEventListener.vue"

export default {
  name: "Home",
  data() {
    return {
      carouselDatas: [
        "https://miro.medium.com/max/1400/1*goSuHxAHqRR8alv_h_3nCw.png",
        "https://miro.medium.com/max/1400/1*goSuHxAHqRR8alv_h_3nCw.png",
        "https://miro.medium.com/max/1400/1*goSuHxAHqRR8alv_h_3nCw.png",
        "https://miro.medium.com/max/1400/1*goSuHxAHqRR8alv_h_3nCw.png",
        "https://miro.medium.com/max/1400/1*goSuHxAHqRR8alv_h_3nCw.png",
      ],
      cardDatas: [
        {
          title: "Title A",
          subtitle: "Subbb A",
          content: "This is my content A",
        },
        {
          title: "Title B",
          subtitle: "Subbb B",
          content: "This is my content BBB",
        },
        {
          title: "Title B",
          subtitle: "Subbb B",
          content: "This is my content BBB",
        },
      ],
    };
  },
  components: {
    // carousel,
    // card,
    trailer,
    navbar,
    outline,
    // lobby,
    linstener,
  },
};




</script>

<style>

</style>