<template>
  <div class="gameIntroBK">
    <v-container class="gameIntro" fluid>
      <h1 class="flex text-center" style="position: relative; top: 2vh">
        Soul of Butterflies series
        <v-card-subtitle
          class="pa-5"
          style="position: relative; margin-bottom: -100px"
        >
          Genres: Puzzle
        </v-card-subtitle>
      </h1>
      <v-row class="pa-1 ma-1 gameIntroRow">
        <v-col xl="4" lg="4" md="12" xs="12" sm="12">
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
          <div style="padding: 2vw" class="hidden-lg-and-up"></div>
        </v-col>
        <v-col xl="8" lg="8" md="12" xs="12" sm="12"> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {},
};
</script>

<style>
.gameIntroBK {
  background: white;
}
.gameIntro {
  height: 100vh;
}
.gameIntroRow {
  position: relative;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-bottom: -100vh;
  font-size: calc(0.9em);
}
.gameIntro_text {
  font-size: 50em;
}
.iframe_trailer {
  display: block;
  margin: auto;
}
.intro_text_block {
  margin: auto;
  /* display: inline-block;
  word-wrap: break-word; */
}
</style>
