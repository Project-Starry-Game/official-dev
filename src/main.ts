/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";
import { createI18n } from "vue-i18n";
// Composables
import { createApp } from "vue";
import messages from "@intlify/unplugin-vue-i18n/messages";

// Plugins
import { registerPlugins } from "@/plugins";

import router from "./router";

const app = createApp(App);

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "zh-TW",
  fallbackLocale: "en",
  availableLocales: ["en", "de"],
  messages: messages,
});

registerPlugins(app);

app.use(router).use(i18n).mount("#app");
