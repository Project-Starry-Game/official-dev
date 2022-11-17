<template>
  <div class="gameIntroBK">
    <v-container class="gameIntro" fluid>
      <h1 class="flex text-center" style="position: relative; top: 3vh">
        Soul of Butterflies series
        <v-card-subtitle class="pa-5 ma-5"> Genres: Puzzle </v-card-subtitle>
      </h1>
      <v-row class="pa-1 ma-1 gameIntroRow">
        <v-col xl="6" lg="6" md="12" xs="12" sm="12">
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
          <br />
          <v-row>
            <div class="pa-3">            
            <h2 class="platform">Platform</h2>
            <div class="platform">
              <v-btn
                class="ma-2"
                outlined
                fab
                color="teal"
              >
              steam
                <v-icon>mdi-format-list-bulleted-square</v-icon>
              </v-btn>

                <v-btn
                class="ma-2"
                outlined
                color="indigo"
              >
              steam
              </v-btn>

                <v-btn
                class="ma-2"
                outlined
                color="indigo"
              >
              steam
                </v-btn>
            </div>
        

              <div class="platform">
                <h3>Release Date</h3>
                <p>Coming Soon！</p>
              </div>
            </div>
          </v-row>


          </v-col>
          <!-- <div style="padding: 2vw" class="hidden-lg-and-up"></div> -->

        <v-col xl="6" lg="6" md="12" xs="12" sm="12">
          <iframe
            class="iframe_trailer"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/qIbzwb8vzNI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-col>
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
  top: 30%;
  left: 50%;
  height: 60vh;
  transform: translate(-50%, -50%);
  margin-bottom: -100vh;
  font-size: calc(0.9em);
}
.gameIntro_text {
  font-size: 50rem;
}
.iframe_trailer {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.intro_text_block {
  margin: auto;
  /* display: inline-block;
  word-wrap: break-word; */
}

.platform{
  display: flex;
  justify-content:center;
}
</style>
