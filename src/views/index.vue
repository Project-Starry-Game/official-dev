<template>
  <div class="home">
    <!-- <linstener/> -->
    <!-- <trailer /> -->
    <div class="body">
      <navbar :subs="this.navbarDatas" />
      <gameIntro style="background: #fc6471" />
      <cumstomCarousel
        :slides="this.carouselDatas"
        style="background: #acfcd9"
      />
      <furniture class="furniture_items" :imgs="this.furnitureDatas" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
<<<<<<< HEAD
import carousel from "@/components/carousel.vue";
// import card from "@/components/card.vue";
import trailer from "@/components/cover.vue"; 
=======
// import trailer from "@/components/canvas.vue";
>>>>>>> 0334cc2 (Setting game intro block)
import navbar from "@/components/navbar.vue";
import gameIntro from "@/components/gameIntro.vue";
import cumstomCarousel from "@/components/carousel.vue";
import furniture from "@/components/furniture.vue";
// import outline from "@/components/outline.vue";
// import lobby from "@/components/Home/lobby.vue";
// import linstener from "@/components/scrollEventListener.vue"

export default {
  name: "Home",
  data() {
    return {
      navbarDatas: [
        {
          icon: "mdi-heart",
          name: "a",
        },
      ],
      carouselDatas: [
        {
<<<<<<< HEAD
<<<<<<< HEAD
          src: require('@/assets/11.jpg'),
          color: "#232323"
        },
        {
          src: require('@/assets/12.jpg'),
        },
        {
          src: require('@/assets/13.jpg'),
          color: "#efef54"
=======
          src: require("@/assets/Carpet_TeddyHead.png"),
          color: "#232323",
=======
          src: require("@/assets/Poster/Poster1.jpg"),
          color: "transparent",
>>>>>>> 12b7ae1 (Setting carousel block)
        },
        {
          src: require("@/assets/Poster/Poster2.jpg"),
          color: "transparent",
        },
        {
<<<<<<< HEAD
          src: require("@/assets/Carpet_TeddyHead.png"),
          color: "#efef54",
>>>>>>> 0334cc2 (Setting game intro block)
=======
          src: require("@/assets/Poster/Poster3.jpg"),
          color: "transparent",
>>>>>>> 12b7ae1 (Setting carousel block)
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
          src: require("@/assets/glasscan_broken.png"),
          width: "20%",
          color: "#20e833",
        },
        {
          src: require("@/assets/View_Newspaper1.png"),
          width: "20%",
          color: "#efef54",
        },
        {
          src: require("@/assets/View_Newspaper2.png"),
          width: "20%",
        },
        {
          src: require("@/assets/View_Newspaper3.png"),
          width: "20%",
        },
        {
          src: require("@/assets/suggestion box.png"),
          width: "20%",
        },
        {
          src: require("@/assets/Carpet_TeddyBody.png"),
          width: "20%",
        },
        {
          src: require("@/assets/Carpet_TeddyHead.png"),
          width: "20%",
        },
        {
          src: require("@/assets/Carpet_TeddyBody.png"),
          width: "20%",
        },
      ],
    };
  },
  components: {
    gameIntro,
    navbar,
    cumstomCarousel,
    furniture,
  },
};
</script>

<style></style>
