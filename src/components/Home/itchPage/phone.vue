<template>
  <!-- <v-container fluid class="itchPagePhone">
    <div class="borderrr" justify="center" align="center">
      <v-col
        class="borderrr"
        data-aos="zoom-in-up"
        data-aos-offset="100px"
        style="position: relative;"
      >
        <div class=" borderrr divBlock_yellow_phone" width="80vh">
          <h3 class="pa-2" >DEMO</h3>
        </div>
        <v-img  class="borderrr" :src="appIcon" width="80%"> </v-img> 
   
        <v-row justify="center" align="center">

          <v-btn
            x-large
            color="#EB5254"
            href="https://project-starry.itch.io/soul-of-butterflies-incubation"
            elevation="0"
       
            class="itch_btn_phone borderrr ma-3"
          >
            <v-img width="20%" class="pa-2" :src="itchImg"> </v-img>
            <span class="text-white "> Get it on itch </span>
          </v-btn>
          <v-btn
            x-small
            color="#EB5254"
            href="https://www.patreon.com/bePatron?u=56283261"
            elevation="0"
            
            class="itch_btn_phone borderrr ma-3"
          >
            <v-img width="10%" class="pa-2" :src="patreonImg"> </v-img>
            <span class="text-white pa-2"> Become a Patron! </span>
          </v-btn>
        </v-row>
      </v-col>
    </div>
  </v-container> -->

 
  <v-card
    class="mx-auto"
    max-width="450"
  >
    <v-img
      :src="appIcon"
      height="300px"
    ></v-img>

    <v-card-title>
      DEMO
    </v-card-title>

    <v-card-subtitle>
      View it on itch.io
    </v-card-subtitle>

    <v-card-actions>
      <!-- <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn> -->

      <v-spacer></v-spacer>

      <v-btn
        size="small"
        color="#EB5254"
        href="https://project-starry.itch.io/soul-of-butterflies-incubation"
        elevation="0"
      
        class="itch_btn_phone borderrr ma-3"
        >
        <v-img width="20%" class="pa-2" :src="itchImg"> </v-img>
        <span class=" pa-1"> Get it on itch </span>
      </v-btn>
      <v-btn 
        size="small"
        color="#EB5254"
        href="https://www.patreon.com/bePatron?u=56283261"
        elevation="0"
        class="borderrr ma-4"
      > 
                  <!-- <v-img width="10%" class="pa-2" :src="patreonImg"> </v-img> -->
        <span class="pa-2" style="font-size:1px"> Become a Patron! </span>
      </v-btn>
    </v-card-actions>

 
  </v-card>
</template>



<script setup>
import patreonImg from "@/assets/Digital-Patreon-Logo_White.png";
import itchImg from "@/assets/itch.svg";
import appIcon from "@/assets/icon.png";
</script>

<script>
export default {
  name: "Home",
  mounted() {},
  methods: {},
};
</script>

<style>
/* .divBlock_yellow_phone {
  background-color: #f49d1a;
  width: 250px;
  position: relative;
  top: -10px;
  z-index: 1;
}
.itch_btn_phone {
  margin-top: 10px;
} */


/* .borderrr{
  border: 3px solid #f49d1a;
} */

</style>
