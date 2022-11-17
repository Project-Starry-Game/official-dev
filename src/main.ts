/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
import vuetify from "./plugins/vuetify";

import { useImage } from "@/apis/global";

import router from "@/router";
import store from "@/store";

const app = createApp(App);

registerPlugins(app);

app.use(router).use(store).use(vuetify).mount("#app");
