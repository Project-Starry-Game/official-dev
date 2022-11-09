<template>
  <v-card
    color="grey lighten-4"
    class="bar"
    flat
    height="200px"
    tile
  >
    <v-toolbar dense>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>Title</v-toolbar-title>
      <v-img class="bar_logo" ref="logo" src="@/assets/logo_shadow.png" />

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
  export default {}

</script>



<style>
.bar{
    position: sticky;
}

</style>