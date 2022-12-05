<template>
  <v-row class="box pa-5 text-primary">
    <v-col class="bor box1" cols="12" md="6">
      <div d-flex flex-column>
        <h1 class="pa-3">{{ $t("gameName") }}</h1>
        <v-card-subtitle
          class="pa-3 ma-0 text-gray"
          style="position: relative; top: -20px; font-size: 12px"
        >
          {{ $t("generes") }}
          <span v-for="(i, index) in genres" :key="index">{{ i }} </span>
        </v-card-subtitle>
      </div>
      <v-row class="bor box1-1" justify="center">
        <v-col>
          <p>
            {{ $t("gameIntro1") }}
          </p>
          <br />
          <p class="intro_text_block">
            {{ $t("gameIntro2") }}
          </p>
          <br />
        </v-col>
        <v-col class=" box1 ibox ma-2" cols="12" md="6">
          <iframe
            class="iframe_box_phone"
            width="300px"
            height="168.75px"
            src="https://www.youtube.com/embed/NJ4rHgu-2rY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-col>
      </v-row>
      <v-row class="ma-2" justify="start">
        <div class="link"></div>
        <v-col class="pl-5 box1-3">
          <p>{{ $t("platforms") }}</p>
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
          <p>{{ $t("release") }}</p>
          <h2 class="mt-1">{{ $t("comingSoon") }}</h2>
        </v-col>
      </v-row>
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
@media only screen and (max-width: 500px) {
  .ibox {
    margin-bottom: -50px;
  }
}

.iframe_box_phone{
  width: 100%;
  height: auto;
}
</style>
