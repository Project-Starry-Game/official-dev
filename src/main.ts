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

import router from "./router";

const app = createApp(App);

import AOS from "aos";
import "aos/dist/aos.css";

registerPlugins(app);

app.use(router).mount("#app");
