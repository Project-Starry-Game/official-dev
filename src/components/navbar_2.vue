<template>
  <v-bottom-navigation
    :value="value"
    color="primary"
  >
    <v-btn>
       <v-img class="bar_logo" ref="logo" src="@/assets/logo_shadow.png" />
      <span>{Recents}</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>
export default {

}
</script>

<style>
nav{
  padding-right: 10px;
  background: lightblue;
  position: sticky;
  top:0;
}
.bar_logo{
  width: 8%;
  height: auto;
}
</style>