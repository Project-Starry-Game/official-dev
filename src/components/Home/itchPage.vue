<template>
  <v-app class="itchPage">
    <v-container class="fill-height" fluid>
      <v-row no-gutters>
        <v-col cols="6">
          <iframe
            frameborder="0"
            src="https://itch.io/embed/1033029?border_width=5&amp;dark=true"
            width="560"
            height="175"
            ><a
              href="https://project-starry.itch.io/soul-of-butterflies-incubation"
              >Soul of Butterflies : Incubation by Project Starry</a
            ></iframe
          >
        </v-col>
        <v-col cols="6">
          <div class="divTitle">
            <h3>Feedback</h3>
          </div>
        </v-col>
      </v-row>
      <v-btn elevation="0" @click="test()" color="white" variant="outlined">
        <p class="text-white">Feedback</p>
      </v-btn>
      <v-btn elevation="0" color="white" @click="test()" variant="outlined">
        <span class="text-white">中文回饋表單</span>
      </v-btn>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Home",
  mounted() {},
  methods: {
    test() {
      console.log("asf");
    },
  },
};
</script>

<style>
.itchPage {
  background: black;
  height: 100vh;
}
.divTitle {
  background-color: #ffd382;
  margin: auto;
  width: 50%;
  height: 30%;
  text-align: center;
  color: white;
}
</style>
