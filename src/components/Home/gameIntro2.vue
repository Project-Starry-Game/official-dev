<template>
  <v-row class="box pa-5">
    <v-col class="bor box1" cols="12" md="6">
      <h1 class="pa-3">
        Soul of Butterflies series
        <v-card-subtitle class="pa-3"> Genres: Puzzle </v-card-subtitle>
      </h1>
      <v-row class="bor box1-1">
        <v-col>
          <p class="intro_text_block">
            After the mysterious death of her parents, he has been taking care
            of her sickly younger sister Naila. Anders struggled to bear the
            huge cost of support and medical care.
          </p>
          <br />
          <p class="intro_text_block">
            And one day, I received an invitation for recruitment from a
            mysterious hotel located in Happy Town, which is on the edge of
            Yinqiao Forest. In order to save my sister who contracted a strange
            disease, Accept and unexpectedly discover a series of huge and
            horrifying conspiracies and secrets.
          </p>
          <br />
        </v-col>
      </v-row>
      <v-row class="bor box1-2">
        <v-col class="box1-3">
          <p>Platform</p>
          <v-row class="pa-2">
            <v-btn
              class="ma-1"
              variant="outlined"
              color="indigo"
              size="small"
              v-for="(item, index) in platforms"
              :key="index"
            >
              {{ item.name }}
            </v-btn>
          </v-row>
        </v-col>
        <div class="link"></div>
        <v-col class="pl-5 box1-3">
          <p>release date</p>
          <h3>comming soon</h3>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="bor box1 ibox" cols="12" md="6">
      <iframe
        class="iframe_trailer"
        width="640px"
        height="310px"
        src="https://www.youtube.com/embed/qIbzwb8vzNI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      platforms: [{ name: "Steam" }, { name: "iOS" }, { name: "Android" }],
    };
  },
  mounted() {
    console.log(this.platforms);
  },
};
</script>

<style>
.bor {
  /* border: 3px solid brown; */
  padding: 20px;
}
.box {
  background-color: beige;
  /* padding-top: 5%; */
}

.ibox {
  display: flex;
  align-self: center;
  justify-content: center;
}
.box1-2 {
  display: flex;
  background-color: #ccc;
  /* justify-content: center; */

  /* height: 25%; */
}

.link {
  border-right: 3px solid black;
  /* line-height:120px; */
}
<<<<<<< HEAD:src/components/Home/gameIntro2.vue


</style>
=======
.disable-events {
  pointer-events: none;
}
</style>
>>>>>>> 1517874 (Save):src/components/Home/test.vue
