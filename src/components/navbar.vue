<template>
  <div class="nav">
    <v-btn variant="text" color="white" size="x-small"> 繁 </v-btn>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(123);
  },
  methods: {},
};
</script>

<style>
.nav {
  position: fixed;
  top: 50%;
  left: 0;
  z-index: 9999999;
}
</style>
