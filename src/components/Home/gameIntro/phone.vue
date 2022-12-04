<template>
  <v-row class="box pa-5 text-primary">
    <v-col class="bor box1" cols="12" md="6">
      <h1 class="pa-3">
        Soul of Butterflies series
        <v-card-subtitle class="pa-0 ma-0">
          Genres:
          <span v-for="(i, index) in genres" :key="index">{{ i }} </span>
        </v-card-subtitle>
      </h1>
      <v-row class="bor box1-1">
        <v-col>
          <p>
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
      <v-row class="ma-2" justify="start">
        <div class="link"></div>
        <v-col class="pl-5 box1-3">
          <p>Platforms</p>
          <div style="height: 15px" />
          <v-btn
            variant="outlined"
            color="primary"
            style="margin-right: 5px; margin-bottom: 5px"
            size="small"
            v-for="(item, index) in platforms"
            :key="index"
          >
            {{ item.name }}
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="ma-2" justify="start">
        <div class="link"></div>
        <v-col class="pl-5 box1-3">
          <p>Release date</p>
          <h2 class="mt-1">Coming Soon</h2>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="bor box1 ibox" cols="12" md="6">
      <iframe
        width="300px"
        height="168.75px"
        src="https://www.youtube.com/embed/NJ4rHgu-2rY?rel=0&amp;fs=0&amp;showinfo=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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

<style></style>
