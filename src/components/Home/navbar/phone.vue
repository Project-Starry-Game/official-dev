<template>
  <div class="text-center">
    <v-btn color="black" @click="overlay = !overlay" icon="mdi-menu"> </v-btn>
    <v-overlay class="my-overlay" v-model="overlay">
      <v-card
        min-width="100vw"
        min-height="100vh"
        width="100%"
        height="100%"
        color="black"
      >
        <v-container fluid style="height: 100vh">
          <v-row justify="center" align="center">
            <v-col cols="12">
              <v-btn
                elevation="0"
                color="transparent"
                size="large"
                icon="mdi-close"
                @click="overlay = !overlay"
              >
              </v-btn>
            </v-col>
          </v-row>
          <v-list-item-group>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              @click="menuActionClick(item.action)"
            >
              <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
          <v-footer
            border
            color="black"
            app
            class="text-center d-flex flex-column"
          >
            <div>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                :icon="icon.icon"
                :href="icon.src"
                variant="text"
              ></v-btn>
            </div>
            <div>
              <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong>Project Starry</strong>
              </v-col>
            </div>
            <!-- <span> PROJECT STARRY </span> -->
          </v-footer>
        </v-container>
      </v-card>
    </v-overlay>
  </div>
</template>

<script setup lang="ts">
import starryLogo from "../../../assets/Starry Logo.png";
</script>

<script lang="ts">
export default {
  props: ["nav"],
  data() {
    return {
      overlay: false,
      icons: [
        {
          icon: "mdi-facebook",
          src: "https://www.facebook.com/projectstarrygame",
        },
        { icon: "mdi-twitter", src: "https://twitter.com/projectstarrygm" },
        { icon: "mdi-instagram", src: "https://www.instagram.com/starrycom/" },
        { icon: "mdi-patreon", src: "https://www.patreon.com/projectstarry" },
      ],
      items: [
        {
          title: "menu1",
          icon: "mdi-close",
          action: "test",
        },
        { title: "menu2", icon: "mdi-close", action: "logout" },
      ],
    };
  },
  methods: {
    onEmit(ele) {
      this.$emit("on-change", ele);
    },
    menuActionClick(action) {
      if (action === "test") {
        alert("TEST!!");
      } else if (action === "logout") {
        alert("LOGOUT!!");
      }
    },
  },
  mouted() {},
};
</script>

<style>
.navbar_drwer {
  display: inline-block;
  /*border: 1px solid red;*/
  position: fixed;
  top: 65vh;
  left: 87vw;
  display: flex;
  flex-direction: column;
  width: 10vw;
  height: 50vh;
  justify-content: space-around;
  /* align-items:flex-end; */
  z-index: 1;
  padding: 0;
}
a {
  color: rgb(112, 108, 102);
  text-decoration: none;
  font-weight: bolder;
}

.eye_open {
  width: 100px;
  height: 100px;
  /*border: 1px solid rosybrown;*/
}
</style>
