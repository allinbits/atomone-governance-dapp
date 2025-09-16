import "@/style.css";

import { DefaultApolloClient } from "@vue/apollo-composable";
import { createApp, h, provide } from "vue";
import { createI18n } from "vue-i18n";

import App from "@/App.vue";
import IconVue from "@/components/ui/Icon.vue";
import { messages } from "@/localization";
import router from "@/router";

import apolloClient from "./apolloClient";

const app = createApp({
  setup () {
    provide(
      DefaultApolloClient,
      apolloClient
    );
  },

  render: () => h(App)
});
const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages
});
app.use(i18n);
app.use(router);
app.component(
  "Icon",
  IconVue
);
router.isReady().then(() => app.mount("#app"));
