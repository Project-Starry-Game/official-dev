<template>
  <div class="furniture_container">
    <v-col 
        v-for="f in this.datas.length"
        :key="f"
    >
        {{ this.datas.img }}</v-col >
  </div>
</template>

<script>
export default {
    name: "Home",
    components: {},
    props: ["datas"],

}
</script>

<style>

</style>