<template>
  <div class="home">
    <trailer />
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
import trailer from "@/components/cover.vue";
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
          src: require("@/assets/Poster/Poster1.jpg"),
          color: "transparent",
        },
        {
          src: require("@/assets/Poster/Poster2.jpg"),
          color: "transparent",
        },
      
        {
          src: require("@/assets/Poster/Poster3.jpg"),
          color: "transparent",
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
          width: "50%",
          height: "50%",
          color: "#20e833",
        },
        {
          src: require("@/assets/View_Newspaper1.png"),
          width: "50vw",
          height: "50vh",
          color: "#efef54",
        },
        {
          src: require("@/assets/View_Newspaper2.png"),
          width: "110px",
          height: "60px",
        },
        {
          src: require("@/assets/View_Newspaper3.png"),
          width: "110px",
          height: "60px",
        },
        {
          src: require("@/assets/suggestion box.png"),
          width: "110px",
          height: "60px",
        },
        {
          src: require("@/assets/Carpet_TeddyBody.png"),
          width: "110px",
          height: "60px",
        },
        {
          src: require("@/assets/Carpet_TeddyHead.png"),
          width: "110px",
          height: "60px",
        },
        {
          src: require("@/assets/Carpet_TeddyBody.png"),
          width: "110px",
          height: "60px",
        },
      ],
    };
  },
  components: {
    trailer,
    gameIntro,
    navbar,
    cumstomCarousel,
    furniture,
  },
};
</script>

<style></style>
