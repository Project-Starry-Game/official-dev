<template>
  <div class="home">
    <!-- <linstener/> -->
      <trailer />
      <div class="body">
        <navbar />
        <outline />
        <carousel :slides="this.carouselDatas" />
        <furniture class="furniture_items" :imgs="this.furnitureDatas" />
        
        <!-- <card/> -->
      </div>
  </div>    
</template>


<script>
// @ is an alias to /src
import carousel from "@/components/carousel.vue";
// import card from "@/components/card.vue";
import trailer from "@/components/cover.vue"; 
import navbar from "@/components/navbar.vue";
import outline from "@/components/outline.vue";
// import lobby from "@/components/Home/lobby.vue";
// import linstener from "@/components/scrollEventListener.vue"
import furniture from "@/components/furniture.vue"

export default {
  name: "Home",
  data() {
    return {
      carouselDatas: [
        // "https://miro.medium.com/max/1400/1*goSuHxAHqRR8alv_h_3nCw.png",
        // "https://miro.medium.com/max/1400/1*goSuHxAHqRR8alv_h_3nCw.png",
        // "https://miro.medium.com/max/1400/1*goSuHxAHqRR8alv_h_3nCw.png",
        // "https://miro.medium.com/max/1400/1*goSuHxAHqRR8alv_h_3nCw.png",
        // "https://miro.medium.com/max/1400/1*goSuHxAHqRR8alv_h_3nCw.png",
        {
          src: require('@/assets/Carpet_TeddyHead.png'),
          color: "#232323"
        },
        {
          src: require('@/assets/character.png'),
        },
        {
          src: require('@/assets/Carpet_TeddyHead.png'),
          color: "#efef54"
        },
    
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
      furnitureDatas: [
        {
          src: require('@/assets/Carpet_TeddyHead.png'),
          width: "20%"        
        },
        {
          src: require('@/assets/Carpet_TeddyBody.png'),
          width: "20%"   
        },
        {
          src: require('@/assets/Carpet_TeddyHead.png'),
          width: "20%"   
        },
        {
          src: require('@/assets/Carpet_TeddyBody.png'),
          width: "20%"   
        },
        {
          src: require('@/assets/Carpet_TeddyHead.png'),
          width: "20%"   
        },
        {
          src: require('@/assets/Carpet_TeddyBody.png'),
          width: "20%"   
        },
        {
          src: require('@/assets/Carpet_TeddyHead.png'),
          width: "20%"   
        },
        {
          src: require('@/assets/Carpet_TeddyBody.png'),
          width: "20%"   
        },
      ],

    };
  },
  components: {
    carousel,
    // card,
    trailer,
    navbar,
    outline,
    // lobby,
    // linstener,
    furniture,
    
  },
};




</script>

<style>

</style>