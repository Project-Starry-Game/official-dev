<template>
  <v-app>
    <trailer/>
    <homeNavbar :subs="navbarDatas" />
    <gameIntro />
    <cumstomCarousel :slides="this.carouselDatas" />
    <!-- <slidebar :imgs="slidebarDatas" /> -->
    <itchPage />
    <!-- <HelloWorld /> -->
  </v-app>
</template>

<script setup>
import poster1 from "@/assets/Poster/Poster1.jpg";
import poster2 from "@/assets/Poster/Poster2.jpg";
import poster3 from "@/assets/Poster/Poster3.jpg";
import glassCan from "@/assets/glasscan_broken.png";
import newspaper from "@/assets/View_Newspaper1.png";
</script>

<script>
import trailer from "@/components/Home/trailer2.vue";
import homeNavbar from "@/components/Home/navbar.vue";
import gameIntro from "@/components/Home/gameIntro2.vue";
import cumstomCarousel from "@/components/Home/cumstomCarousel.vue";
import slidebar from "@/components/Home/slidebar.vue";
import itchPage from "@/components/Home/itchPage.vue";
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
  components: {trailer, homeNavbar, gameIntro, cumstomCarousel, slidebar, itchPage },
  mounted() {
    AOS.init();
  },
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
          src: poster1,
          color: "transparent",
        },
        {
          src: poster2,
          color: "transparent",
        },
        {
          src: poster3,
          color: "transparent",
        },
      ],
      slidebarDatas: [
        {
          src: glassCan,
          width: "50%",
          height: "50%",
          color: "#20e833",
        },
        {
          src: newspaper,
          width: "50vw",
          height: "50vh",
          color: "#efef54",
        },
        {
          src: newspaper,
          width: "110px",
          height: "60px",
        },
        {
          src: newspaper,
          width: "110px",
          height: "60px",
        },
        {
          src: glassCan,
          width: "50%",
          height: "50%",
          color: "#20e833",
        },
        {
          src: newspaper,
          width: "50vw",
          height: "50vh",
          color: "#efef54",
        },
        {
          src: newspaper,
          width: "110px",
          height: "60px",
        },
        {
          src: newspaper,
          width: "110px",
          height: "60px",
        },
      ],
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
