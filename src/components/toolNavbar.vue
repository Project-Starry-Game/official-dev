<template>
  <div class="nav d-flex flex-column ma-0">
    <v-btn
      @click="changeLocales('zh-TW')"
      class="ma-0"
      variant="text"
      color="white"
      size="small"
    >
      繁
    </v-btn>
    <v-btn
      @click="changeLocales('en')"
      class="ma-0"
      variant="text"
      color="white"
      size="small"
    >
      EN
    </v-btn>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(123);
  },
  methods: {
    changeLocales(lan) {
      this.$i18n.locale = lan;
    },
  },
};
</script>

<style>
.nav {
  position: fixed;
  top: 90%;
  left: 0%;
  z-index: 9999999;
}
</style>
