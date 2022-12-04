<template>
  <v-row class="box pa-5 text-primary">
    <v-col class="bor box1" cols="12" md="6">
      <div d-flex flex-column>
        <h1 class="pa-3">Soul of Butterflies series</h1>
        <v-card-subtitle
          class="pa-4 ma-0"
          style="position: relative; top: -30px; font-size: 14px"
        >
          Genres:
          <span v-for="(i, index) in genres" :key="index">{{ i }} </span>
        </v-card-subtitle>
      </div>

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
      <v-row class="bor box1-2 ma-2" justify="center">
        <v-col class="box1-3">
          <p>Platform</p>
          <v-row class="pa-2 mt-1">
            <v-btn
              class="ma-1"
              variant="outlined"
              color="primary"
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
          <p>Release</p>
          <h2 class="mt-1">Coming Soon</h2>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="bor box1 ibox" cols="12" md="6">
      <iframe
        class="iframe_trailer"
        width="640px"
        height="360px"
        src="https://www.youtube.com/embed/NJ4rHgu-2rY"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["platforms", "genres"],
  mounted() {},
};
</script>

<style>
.bor {
  padding: 20px;
}

.box {
  height: auto;
}

.ibox {
  display: flex;
  align-self: center;
  justify-content: center;
}
.box1-2 {
  display: flex;
  border-radius: 1rem;
}

.link {
  border-right: 3px solid #fff;
}
</style>
