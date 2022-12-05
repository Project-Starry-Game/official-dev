<template>
  <div>
    <div class="nav d-flex flex-column ma-0">
      <v-btn
        @click="changeLocales('zh-TW')"
        class="ma-2"
        variant="outlined"
        color="white"
        size="small"
      >
        繁
      </v-btn>
      <v-btn
        @click="changeLocales('en')"
        class="ma-2"
        variant="outlined"
        color="white"
        size="small"
      >
        EN
      </v-btn>
      <v-btn
        @click="changeLocales('ja')"
        class="ma-2"
        variant="outlined"
        color="white"
        size="small"
      >
        日
      </v-btn>
    </div>
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
  top: 40%;
  left: 2vw;
  z-index: 10;
}
</style>
