// playwright/index.ts
import "../src/style.css";

import { beforeMount } from "@playwright/experimental-ct-vue/hooks";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { createI18n } from "vue-i18n";

import apolloClient from "../src/apolloClient";
import IconVue from "../src/components/ui/Icon.vue";
import { messages } from "../src/localization";

beforeMount(async ({ app }) => {
  app.provide(
    DefaultApolloClient,
    apolloClient
  );
  const i18n = createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    messages
  });
  app.use(i18n);
  app.component(
    "Icon",
    IconVue
  );
});
