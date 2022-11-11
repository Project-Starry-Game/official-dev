<template>
  <div class="home">
    <!-- <linstener/> -->
      <trailer />
      <div class="body">
        <navbar :subs="this.navbarDatas"/>
        
        <carousel :slides="this.carouselDatas" />
        <furniture class="furniture_items" :imgs="this.furnitureDatas" /> 
        <outline />
        <card/>
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
      navbarDatas:[
        {
          icon:"mdi-heart",
          name:"a",
        },
      ],
      carouselDatas: [
        // "https://miro.medium.com/max/1400/1*goSuHxAHqRR8alv_h_3nCw.png",
        // "https://miro.medium.com/max/1400/1*goSuHxAHqRR8alv_h_3nCw.png",
        // "https://miro.medium.com/max/1400/1*goSuHxAHqRR8alv_h_3nCw.png",
        // "https://miro.medium.com/max/1400/1*goSuHxAHqRR8alv_h_3nCw.png",
        // "https://miro.medium.com/max/1400/1*goSuHxAHqRR8alv_h_3nCw.png",
        {
          src: require('@/assets/11.jpg'),
          color: "#232323"
        },
        {
          src: require('@/assets/12.jpg'),
        },
        {
          src: require('@/assets/13.jpg'),
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
          src: require('@/assets/glasscan_broken.png'),
          width: "20%",
          color:"#20e833"
        },
        {
          src: require('@/assets/View_Newspaper1.png'),
          width: "20%",
          color:"#efef54"
             
        },
        {
          src: require('@/assets/View_Newspaper2.png'),
          width: "20%"   
        },
        {
          src: require('@/assets/View_Newspaper3.png'),
          width: "20%"   
        },
        {
          src: require('@/assets/suggestion box.png'),
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