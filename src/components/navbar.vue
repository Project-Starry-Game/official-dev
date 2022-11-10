<template>
  <v-card
    color="grey lighten-4"   
    class="bar" 
  >
    <v-toolbar  
        dense
        flat
        tile
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>
        <v-img 
        align-self-start
        height= "40px"
        class="bar_logo" ref="logo" src="@/assets/LOGO_ONLY_BLACK.png" />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
  export default {
    name: "Home",
    props: ["subs"],
  }

</script>



<style>
.bar{
    background: lightblue;
    position: sticky;
    top:0;
    border-radius:0;
    z-index: 10000;
}
.bar_logo{
    display: flex;
    text-align:left;

}

</style>